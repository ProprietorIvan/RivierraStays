import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Phone, Check, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Input from './Input';
import CardContent from './CardContent';
import Card from './Card';
import * as Dialog from '@radix-ui/react-dialog';
import { ContactForm } from './Quote';

interface QuoteResultPorps {
  quote: string;
  type: string;
  handleIsBlurred: (status: boolean) => void
  contactForm: ContactForm;
  setContactForm: Dispatch<SetStateAction<ContactForm>>;
}

const QuoteResult = ({ quote, type, handleIsBlurred, contactForm, setContactForm }: QuoteResultPorps) => {
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInquirySuccess, setShowInquirySuccess] = useState(false);
  const [unavailableSlots, setUnavailableSlots] = useState<any>([]);

  useEffect(() => {
    const generateUnavailableSlots = () => {
      const unavailable: any = [];
      const nextWeek = getNextWeekDates();
      const timeSlots = ['9:00 AM', '11:30 AM', '3:00 PM', '5:30 PM'];

      nextWeek.forEach(date => {
        timeSlots.forEach(time => {
          if (Math.random() < 0.3) {
            unavailable.push(`${formatDate(date)}-${time}`);
          }
        });
      });

      setUnavailableSlots(unavailable);
    };

    generateUnavailableSlots();
  }, []);

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const timeSlots = ['9:00 AM', '11:30 AM', '3:00 PM', '5:30 PM'];

  const formatDate = (date: any) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const handleBookingSubmit = (e: any) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleInquirySubmit = (e: any) => {
    e.preventDefault();
    setShowInquirySuccess(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const zapierWebhook = 'https://hooks.zapier.com/hooks/catch/20756347/2r9c4e2/';

    try {
      const response = await fetch(zapierWebhook, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          type,
          slot: selectedSlot,
          quote,
          ...contactForm
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setShowSuccess(true);
      handleIsBlurred(false)
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  }

  const SuccessScreen = ({ type }: any) => {
    const isBooking = type === 'booking';
    return (
      <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-medium text-gray-900">
          {isBooking ? 'Your appointment is confirmed' : 'Message received'}
        </h3>
        {isBooking ? (
          <div className="space-y-2 text-center">
            <p className="text-gray-600">
              We&apos;ll see you on {selectedSlot}
            </p>
            <p className="text-gray-500 text-sm">
              Confirmation sent to {contactForm.email}
            </p>
          </div>
        ) : (
          <div className="space-y-2 text-center">
            <p className="text-gray-600">
              We&apos;ll get back to you within 24 hours
            </p>
            <p className="text-gray-500 text-sm">
              Response will be sent to {contactForm.email}
            </p>
          </div>
        )}
        <button
          onClick={() => {
            if (isBooking) {
              setBookingDialogOpen(false);
              setShowSuccess(false);
              setBookingStep(1);
              setContactForm({
                name: '', phone: '', email: '', address: '', question: ''
              });
            } else {
              setInquiryDialogOpen(false);
              setShowInquirySuccess(false);
              setContactForm({
                name: '', phone: '', email: '', address: '', question: ''
              });
            }
          }}
          className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-[#ffc527] hover:text-black"
        >
          Done
        </button>
      </div>
    );
  };

  const renderBookingContent = () => {
    if (showSuccess) {
      return <SuccessScreen type="booking" />;
    }

    return bookingStep === 1 ? (
      <div className="p-6">
        <div className="grid grid-cols-7 gap-4">
          {getNextWeekDates().map((date, dateIndex) => (
            <div key={dateIndex} className="space-y-2">
              <div className="text-center font-medium p-2 bg-gray-50 rounded-xl">
                {formatDate(date)}
              </div>
              <div className="space-y-2">
                {timeSlots.map((time, timeIndex) => {
                  const slotId = `${formatDate(date)}-${time}`;
                  const isSelected = selectedSlot === slotId;
                  const isUnavailable = unavailableSlots.includes(slotId);

                  return (
                    <button
                      key={timeIndex}
                      onClick={() => !isUnavailable && setSelectedSlot(slotId)}
                      disabled={isUnavailable}
                      className={`w-full p-2 rounded-xl text-sm transition-all duration-300 
                        ${isUnavailable
                          ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                          : isSelected
                            ? 'bg-gray-900 text-white scale-105 shadow-lg'
                            : 'bg-white hover:bg-gray-50 border border-gray-100'}`}
                    >
                      {time}
                      {isUnavailable && ' (Taken)'}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => selectedSlot && setBookingStep(2)}
          disabled={!selectedSlot}
          className="w-full mt-8 bg-gray-900 text-white p-6 rounded-2xl disabled:bg-gray-100 disabled:text-gray-400"
        >
          {selectedSlot ? (
            <span className="flex items-center justify-center">
              Continue with {selectedSlot}
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          ) : (
            'Select a time'
          )}
        </button>
      </div>
    ) : (
      <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
        <Input
          placeholder="Your Name"
          value={contactForm.name}
          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
          required
        />
        <Input
          placeholder="Phone Number"
          type="tel"
          value={contactForm.phone}
          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
          required
        />
        <Input
          placeholder="Email Address"
          type="email"
          value={contactForm.email}
          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
          required
        />
        <Input
          placeholder="Your Address"
          value={contactForm.address}
          onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
          required
        />
        <textarea
          placeholder="Additional Notes (optional)"
          value={contactForm.question}
          onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
          className="w-full p-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900 focus:border-gray-900 resize-none min-h-[100px]"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-gray-900 text-white p-6 rounded-2xl mt-4 hover:bg-[#ffc527] hover:text-black"
        >
          Confirm Booking
        </button>
      </form>
    );
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4 pt-6]">
              <Dialog.Root open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
                <Dialog.Trigger asChild>
                  <button className="bg-gray-900 text-white px-8 py-6 rounded-2xl hover:bg-[#ffc527] hover:text-black transition-all duration-300 flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Make booking
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                  <Dialog.Content className="fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-3xl w-[calc(100%-2rem)] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-6">
                    <div className="mb-6">
                      <Dialog.Title className="text-2xl font-medium">
                        {showSuccess
                          ? 'Confirmation'
                          : bookingStep === 1
                            ? 'Choose a Time'
                            : 'Complete Booking'}
                      </Dialog.Title>
                    </div>
                    {renderBookingContent()}
                    <Dialog.Close asChild>
                      <button
                        className="absolute right-6 top-6 text-gray-400 hover:text-gray-500"
                        aria-label="Close"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Dialog.Root open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
                <Dialog.Trigger asChild>
                  <button className="bg-gray-50 text-gray-900 px-8 py-6 rounded-2xl hover:bg-[#ffc527] hover:text-black transition-all duration-300 flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Have Questions?
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                  <Dialog.Content className="fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-3xl w-[calc(100%-2rem)] sm:max-w-xl max-h-[90vh] overflow-y-auto p-6">
                    <div className="mb-6">
                      <Dialog.Title className="text-2xl font-medium">
                        {showInquirySuccess ? 'Message Sent' : 'Ask Us Anything'}
                      </Dialog.Title>
                    </div>
                    {showInquirySuccess ? (
                      <SuccessScreen type="inquiry" />
                    ) : (
                      <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
                        <Input
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
                          required
                        />
                        <Input
                          placeholder="Phone Number"
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
                          required
                        />
                        <Input
                          placeholder="Email Address"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
                          required
                        />
                        <Input
                          placeholder="Your Address"
                          value={contactForm.address}
                          onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                          className="h-12 bg-white border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900"
                          required
                        />
                        <textarea
                          placeholder="Your Question"
                          value={contactForm.question}
                          onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
                          className="w-full p-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-gray-900 focus:border-gray-900 resize-none min-h-[100px]"
                          required
                        />
                        <button
                          type="submit"
                          className="w-full bg-gray-900 text-white p-6 rounded-2xl mt-4"
                        >
                          Send Message
                        </button>
                      </form>
                    )}
                    <Dialog.Close asChild>
                      <button
                        className="absolute right-6 top-6 text-gray-400 hover:text-gray-500"
                        aria-label="Close"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            <div className="pt-6">
              <a
                href="tel:7786534862"
                className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span>Or call us at 778.653.4862</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteResult;

// // app/components/EmailForm.tsx
// 'use client';

// import { useState } from 'react';

// export default function EmailForm() {
//   const [to, setTo] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [images, setImages] = useState<FileList | null>(null);
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');
//     setErrorMessage('');

//     try {
//       const formData = new FormData();
//       formData.append('to', to);
//       formData.append('subject', subject);
//       formData.append('message', message);
      
//       if (images) {
//         Array.from(images).forEach(image => {
//           formData.append('images', image);
//         });
//       }

//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to send email');
//       }

//       setStatus('success');
//       // Reset form
//       setTo('');
//       setSubject('');
//       setMessage('');
//       setImages(null);

//     } catch (error) {
//       setStatus('error');
//       setErrorMessage(error instanceof Error ? error.message : 'Failed to send email');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4">
//       <div>
//         <label htmlFor="to" className="block text-sm font-medium text-gray-700">
//           To Email
//         </label>
//         <input
//           type="email"
//           id="to"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//           Subject
//         </label>
//         <input
//           type="text"
//           id="subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//           Message
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           rows={4}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="images" className="block text-sm font-medium text-gray-700">
//           Images
//         </label>
//         <input
//           type="file"
//           id="images"
//           onChange={(e) => setImages(e.target.files)}
//           className="mt-1 block w-full"
//           accept="image/*"
//           multiple
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={status === 'loading'}
//         className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
//       >
//         {status === 'loading' ? 'Sending...' : 'Send Email'}
//       </button>

//       {status === 'success' && (
//         <p className="text-green-600">Email sent successfully!</p>
//       )}

//       {status === 'error' && (
//         <p className="text-red-600">{errorMessage}</p>
//       )}
//     </form>
//   );
// }
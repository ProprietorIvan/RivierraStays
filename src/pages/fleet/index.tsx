import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Bed,
  Building,
  MessageSquare,
  ArrowRight,
  Star,
  MapPin,
  Bath,
  Maximize,
  Coffee,
  Wifi,
  Car,
  UtensilsCrossed,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

interface Feature {
  title: string;
  description: string;
}

interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  price: string;
  location: string;
  sqm?: number;
}

interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export default function FleetRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/properties");
  }, [router]);

  return null;
}

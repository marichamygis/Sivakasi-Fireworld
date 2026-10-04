'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock, Phone } from 'lucide-react';
import { useStoreSettings } from '@/context/StoreSettingsContext';

export const Footer: React.FC = () => {
  const { settings } = useStoreSettings();

  const helpline = settings?.helpline_mobile?.trim() || '';
  const cleanPhone = helpline.replace(/[^\d+]/g, '');
  const storeAddress = settings?.store_address?.trim() || '';
  const storeName = settings?.store_name || 'Sivakasi Fireworld';

  return (
    <footer className="bg-slate-100 text-slate-600 text-xs border-t border-slate-200">
      {/* Compact Features Row */}
      <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-bold text-slate-800">Direct Factory Rates</span>
        </div>

        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-bold text-slate-800">Safe Doorstep Delivery</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-bold text-slate-800">WhatsApp Copy Share</span>
        </div>

        {helpline ? (
          <a href={`tel:${cleanPhone}`} className="flex items-center gap-2 hover:text-amber-600 transition-colors">
            <Phone className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-bold text-slate-800">{helpline}</span>
          </a>
        ) : (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-bold text-slate-800">Direct Sivakasi Outlet</span>
          </div>
        )}
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/logo.png"
              alt="Sivakasi Fireworld Logo"
              width={48}
              height={32}
              className="h-7 w-auto max-w-[44px] object-contain"
            />
            <span className="font-black text-sm text-slate-950">
              {storeName.toUpperCase()}
            </span>
          </div>
          {storeAddress ? (
            <p className="text-slate-500 text-[11px] leading-relaxed">
              {storeAddress}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-amber-600 transition-colors">Storefront</Link>
          <Link href="/#catalog" className="hover:text-amber-600 transition-colors">Fireworks Price List</Link>
          <Link href="/track-order" className="hover:text-amber-600 transition-colors">Order Tracking</Link>
        </div>

        <div className="text-[11px] text-slate-500 text-left md:text-right font-medium">
          Minimum Orders: South India: ₹4,000 | Other States: ₹{settings?.min_order_other_states?.toLocaleString('en-IN') ?? '5,000'}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-slate-200 border-t border-slate-300 py-3 text-center text-[11px] text-slate-500 font-medium">
        © 2026 {settings?.store_name || 'Sivakasi Fireworld'}. All Rights Reserved.
      </div>
    </footer>
  );
};

'use client';
import Link from 'next/link';
import { Eye, Shield, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Right column — text (comes first in RTL) */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-brand-red"></span>
              <span className="text-brand-red text-sm font-bold tracking-wide">عدسات كورية أصلية</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              عدسات كورية أصلية{' '}
              <span className="text-brand-red">بإطلالة تخطف العيون</span>
            </h1>
            <p className="text-text-muted text-base leading-relaxed max-w-md">
              ألوان طبيعية، راحة طول اليوم، ولمسة جمال مستوحاة من أحدث صيحات الجمال التركي والكوري
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Shield size={14} />, label: 'صناعة كورية KR' },
                { icon: <Eye size={14} />, label: 'آمنة للعيون' },
                { icon: <Clock size={14} />, label: 'راحة طول اليوم' },
              ].map((badge) => (
                <span key={badge.label} className="inline-flex items-center gap-1.5 bg-white border border-border-soft rounded-full px-3 py-1.5 text-xs font-semibold text-text-main">
                  <span className="text-brand-red">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-full px-8 py-3.5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-red">
                تسوقي الآن
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center gap-2 border border-brand-red text-brand-red hover:bg-rose-50 font-bold rounded-full px-8 py-3.5 transition-all duration-150">
                اكتشفي الألوان
              </Link>
            </div>
          </div>

          {/* Left column — visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-rose-100 to-[#E8CFCF] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-3 overflow-hidden">
              <Eye size={64} className="text-[#E8CFCF] opacity-60" />
              <span className="text-brand-red font-bold text-sm">صورة عين جمالية</span>
              {/* Floating badge — rating */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 shadow-md flex items-center gap-1.5">
                <Star size={14} className="text-brand-red fill-brand-red" />
                <span className="font-black text-sm text-text-main">4.9</span>
                <span className="text-text-muted text-xs">تقييم العملاء</span>
              </div>
            </div>
            {/* Floating badge — customers */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-md border border-border-soft">
              <span className="font-black text-brand-red text-lg">5000+</span>
              <span className="block text-text-muted text-xs">عميلة سعيدة</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

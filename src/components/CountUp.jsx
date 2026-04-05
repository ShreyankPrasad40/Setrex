"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);

  const getDecimalPlaces = (num) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = (latest) => {
    const hasDecimals = maxDecimals > 0;
    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0
    };
    const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const startVal = direction === 'down' ? to : from;
    const endVal = direction === 'down' ? from : to;

    const obj = { value: startVal };

    const animate = () => {
      if (onStart) onStart();
      
      gsap.to(obj, {
        value: endVal,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        onUpdate: () => {
          if (node) {
            node.textContent = formatValue(obj.value);
          }
        },
        onComplete: () => {
          if (onEnd) onEnd();
        }
      });
    };

    if (startWhen) {
      ScrollTrigger.create({
        trigger: node,
        start: "top 95%",
        onEnter: animate,
        once: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [from, to, direction, delay, duration, startWhen, onStart, onEnd]);

  return <span className={className} ref={ref}>{formatValue(direction === 'down' ? to : from)}</span>;
}

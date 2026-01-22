/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement>;
  }
}

interface HTMLMarqueeElement extends HTMLElement {
  behavior?: 'scroll' | 'slide' | 'alternate';
  direction?: 'left' | 'right' | 'up' | 'down';
  scrollamount?: number;
  scrolldelay?: number;
  truespeed?: boolean;
}

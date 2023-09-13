import React from 'react';
import { useEffect } from 'react';

export default function IndexPage() {
  const Barcode = ""
  console.log('heyyaaa');
  useEffect(() => {
    console.log('heyyaaa');
    if (window.Barcode && window.Barcode.postMessage) {
      Barcode.postMessage("hello bro hi");
   }
  });
  return <div>Hello World.</div>;
}
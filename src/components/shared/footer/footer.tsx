import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
          <Link href={'/'}>
            <p className="text-2xl font-bold mb-4 block">Apple Empire</p>
          </Link>
          <p className="text-gray-400 text-sm leading-6">
            Enhancing your tech experience with top-quality products. Stay
            connected for the latest updates and promotions.
          </p>
          <div className="flex mt-4">
            <Input type="email" placeholder="Your Email" />
            <Button className="mx-2" variant="secondary">
              Subscribe
            </Button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <Link href="#">
              <Facebook className="text-blue-500" />
            </Link>
            <Link href="#">
              <Twitter className="text-sky-300" />
            </Link>
            <Link href="#">
              <Instagram className="text-pink-500" />
            </Link>
            <Link href="#">
              <Linkedin className="text-blue-400" />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="font-bold mb-2 text-gray-100">Quick Links</h2>
            <ul className="text-sm list-none leading-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="font-bold mb-2 text-gray-100">Shop</h2>
            <ul className="text-sm list-none leading-10">
              <li>
                <Link href="/shop/category1">Category 1</Link>
              </li>
              <li>
                <Link href="/shop/category2">Category 2</Link>
              </li>
              <li>
                <Link href="/shop/category3">Category 3</Link>
              </li>
              <li>
                <Link href="/shop/sale">Sale</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="font-bold mb-2 text-gray-100">Customer Support</h2>
            <ul className="text-sm list-none leading-10">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Information</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-white">© 2024 All rights reserved by Apple Empire.</p>
      </div>
    </footer>
  );
};

export default Footer;

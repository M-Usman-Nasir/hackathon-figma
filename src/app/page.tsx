import React from 'react';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import AuthSection from '@/components/Authsection';
import BlogSection from '@/components/Blogsections';
import ExtendedProductGrid from '@/components/Extendedproductgrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow container mx-auto px-4">
        {/* Pagination Component */}
        <Pagination />
        <AuthSection/>
        <ExtendedProductGrid/>
      </main>
      {/* Footer Component */}
      <BlogSection/>
      <Footer />
    </div>
  );
};

export default Home;
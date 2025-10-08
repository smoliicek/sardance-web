import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#101010] text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} ŠaR Dance Jihlava z.s. Všechna práva vyhrazena.</p>
                <p className='text-sm'>Stránka využívá pouze cookies nutné k jejímu správnému chodu. Created by <a className="text-blue-500" href="https://github.com/smoliicek">Vít Smolík</a></p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com/sar.dance.jihlava/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/sardancejihlava" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
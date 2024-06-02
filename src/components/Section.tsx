import React from 'react';
import '../App.css';

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<PageProps> = ({ children, className = '', ...rest }) => {
    return (
        <div className={`section ${className}`} {...rest}>
            {children}
        </div>
    );
}

export default Section;

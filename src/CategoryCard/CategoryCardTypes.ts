import React from 'react';

export interface CategoryCardProps {
    /**
     * a URL for a backgroundImage to represent the category
     */
    backgroundImageURL: string;
    /**
     * Should be a string of the category title
     */
    children: React.ReactNode;
    /**
     * Category Icon SVG
     */
    icon: React.ReactNode;
}

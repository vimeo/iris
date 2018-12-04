export interface BadgeProps {
    format?:
        | 'alum'
        | 'beta'
        | 'business'
        | 'curation'
        | 'default'
        | 'explicit'
        | 'featured'
        | 'hd'
        | 'info'
        | 'live'
        | 'live-archive'
        | 'new'
        | 'partner'
        | 'plus'
        | 'producer'
        | 'pro'
        | 'spatial'
        | 'sponsor'
        | 'staff'
        | 'support'
        | 'unrated'
        | 'upgrade'
        | 'vod';
    href: string;
    label?: string;
    size?: 'sm' | 'lg';
}

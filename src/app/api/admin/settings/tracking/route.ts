import { NextRequest, NextResponse } from 'next/server';

// In a production app, this would be stored in a database
// For now, we'll use a simple in-memory store (persists per server instance)
let trackingConfig = {
    gtm_id: process.env.NEXT_PUBLIC_GTM_ID || '',
    ga4_id: process.env.NEXT_PUBLIC_GA4_ID || '',
    meta_pixel_id: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
    meta_access_token: process.env.META_ACCESS_TOKEN || '',
    linkedin_partner_id: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '',
    google_ads_id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
};

export async function GET() {
    // Return config with masked secrets
    return NextResponse.json({
        config: {
            ...trackingConfig,
            meta_access_token: trackingConfig.meta_access_token
                ? '••••••••' + trackingConfig.meta_access_token.slice(-8)
                : '',
        },
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the incoming data
        const allowedFields = [
            'gtm_id',
            'ga4_id',
            'meta_pixel_id',
            'meta_access_token',
            'linkedin_partner_id',
            'google_ads_id',
        ];

        const updatedConfig: Record<string, string> = {};

        for (const field of allowedFields) {
            if (body[field] !== undefined) {
                // Don't update masked values
                if (field === 'meta_access_token' && body[field].includes('••••')) {
                    updatedConfig[field] = trackingConfig.meta_access_token;
                } else {
                    updatedConfig[field] = body[field];
                }
            }
        }

        // Update the config
        trackingConfig = {
            ...trackingConfig,
            ...updatedConfig,
        };

        // In production, you would save this to a database here
        // Example: await db.settings.upsert({ key: 'tracking', value: trackingConfig });

        return NextResponse.json({
            success: true,
            message: 'Tracking configuration saved successfully',
        });

    } catch (error) {
        console.error('Failed to save tracking config:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to save configuration' },
            { status: 500 }
        );
    }
}

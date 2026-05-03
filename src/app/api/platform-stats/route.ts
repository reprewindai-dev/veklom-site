import { NextResponse } from 'next/server';

/**
 * GET /api/platform-stats
 *
 * Returns live platform metrics for the LiveStats widget.
 *
 * WIRING GUIDE:
 * Replace the seed values below with real queries once your backend
 * Supabase tables are connected. Suggested queries:
 *
 *   api_calls_today:
 *     SELECT COUNT(*) FROM api_request_logs
 *     WHERE created_at >= NOW() - INTERVAL '1 day'
 *
 *   tools_deployed:
 *     SELECT COUNT(*) FROM marketplace_tools WHERE status = 'active'
 *
 *   active_integrations:
 *     SELECT COUNT(DISTINCT user_id) FROM user_integrations
 *     WHERE last_ping > NOW() - INTERVAL '7 days'
 *
 *   vendors_listed:
 *     SELECT COUNT(*) FROM vendors WHERE approved = true
 *
 * Uptime can be pulled from your monitoring service (BetterUptime,
 * UptimeRobot, etc.) or hardcoded until you wire a real source.
 */

export const revalidate = 30; // Next.js ISR — revalidate every 30s on the server

export async function GET() {
  try {
    // --- SEED VALUES ---
    // Replace each value with a real DB/API call when ready.
    // These are intentionally conservative starting numbers.
    const stats = {
      api_calls_today: 0,
      tools_deployed: 0,
      active_integrations: 0,
      vendors_listed: 0,
      uptime_pct: '99.9%',
    };

    // Example of how to wire Supabase when ready:
    // import { createClient } from '@supabase/supabase-js';
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // );
    // const { count } = await supabase
    //   .from('api_request_logs')
    //   .select('*', { count: 'exact', head: true })
    //   .gte('created_at', new Date(Date.now() - 86400000).toISOString());
    // stats.api_calls_today = count ?? 0;

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    });
  } catch (err) {
    console.error('[platform-stats]', err);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}

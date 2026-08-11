'use client';

import { useEffect } from 'react';
import posthog from '@/lib/instrumentation-client';

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.capture('$pageview');
  }, []);

  return <>{children}</>;
}

// Analytics utility for tracking user interactions and performance

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = true;

  constructor() {
    // Check if analytics should be enabled (respect user privacy)
    this.isEnabled = !this.isDoNotTrackEnabled();
  }

  private isDoNotTrackEnabled(): boolean {
    return (
      navigator.doNotTrack === "1" ||
      (window as any).doNotTrack === "1" ||
      (navigator as any).msDoNotTrack === "1"
    );
  }

  track(event: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(analyticsEvent);
    
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics Event:", analyticsEvent);
    }

    // Here you would typically send to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    this.sendToAnalyticsService(analyticsEvent);
  }

  private sendToAnalyticsService(event: AnalyticsEvent) {
    // Implement your analytics service integration here
    // Example for Google Analytics 4:
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', event.event, event.properties);
    // }
  }

  // Track page views
  trackPageView(page: string) {
    this.track("page_view", { page });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location?: string) {
    this.track("button_click", { button_name: buttonName, location });
  }

  // Track form submissions
  trackFormSubmission(formName: string) {
    this.track("form_submission", { form_name: formName });
  }

  // Track scroll depth
  trackScrollDepth(depth: number) {
    this.track("scroll_depth", { depth });
  }

  // Track time on page
  trackTimeOnPage(duration: number) {
    this.track("time_on_page", { duration });
  }

  // Track download events
  trackDownload(fileName: string) {
    this.track("file_download", { file_name: fileName });
  }

  // Get all tracked events (for debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events (for privacy)
  clearEvents() {
    this.events = [];
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Performance monitoring
export const performance = {
  mark(name: string) {
    if (typeof window !== "undefined" && window.performance) {
      window.performance.mark(name);
    }
  },

  measure(name: string, startMark: string, endMark: string) {
    if (typeof window !== "undefined" && window.performance) {
      try {
        const measure = window.performance.measure(name, startMark, endMark);
        analytics.track("performance_measure", {
          name,
          duration: measure.duration,
        });
      } catch (error) {
        console.warn("Performance measure failed:", error);
      }
    }
  },

  trackPageLoad() {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        const loadTime = performance.now();
        analytics.track("page_load_time", { load_time: loadTime });
      });
    }
  },
};

export default analytics; 
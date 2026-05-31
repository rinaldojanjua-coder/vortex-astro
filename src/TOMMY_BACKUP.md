# Tommy / FWD Construction — Temporarily Removed

To restore, prompt: "add Tommy back in"

## 1. VideoTestimonials.tsx — Add to `videos` array (line ~76)
```tsx
  { name: "Tommy", business: "FWD Construction", src: "/testimonial3.mp4" },
```

## 2. CaseStudies.tsx — Add to `studies` array (after Julia entry)
```tsx
  {
    name: "Tommy",
    business: "FWD Construction",
    beforeReviews: 67,
    afterReviews: 153,
    timeframe: "3 weeks",
    highlight: "86 new reviews",
    image: "/fwd-construction.jpg",
  },
```

## 3. TrustedBy.tsx — Add to `clients` array
```tsx
  "FWD Construction",
```

## 4. blog/index.astro — Line ~98, restore Tommy's name
Change: "Join local business owners like Julia and Zach..."
Back to: "Join local business owners like Julia, Tommy, and Zach..."

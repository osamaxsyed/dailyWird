# UI/UX Specification: Daily Adhkar App

## 1. Home Screen (Main Menu)
### Layout
- Full-screen background with subtle Islamic geometric pattern
- App logo/name at top (20% of screen height)
- Centered container for main options (60% of screen height)
- Status bar at bottom (20% of screen height)

### Components
1. Primary Action Buttons
   - "Morning Adhkar" button (large, prominent)
   - "Evening Adhkar" button (large, prominent)
   - Both buttons should have distinct yet complementary colors
   - Icons: Sun for morning, Moon for evening
   - Shadow effect for depth
   - Hover/press states with subtle animation

2. Resume Session Card (if applicable)
   - Only appears when there's an incomplete session
   - Shows session type (Morning/Evening)
   - Displays progress percentage
   - "Resume" button
   - "Dismiss" option (small 'x' in corner)
   - Slight elevation shadow
   - Subtle pulsing animation to draw attention

3. Status Bar
   - Last completed session info
   - Daily streak count (if implemented)
   - Settings icon (top right)

## 2. Adhkar Session Screen
### Layout
- Safe area for notch/status bar
- Progress section at top (15% of screen)
- Main dhikr card (70% of screen)
- Navigation controls (15% of screen)

### Components
1. Progress Header
   - Linear progress bar showing overall session progress
   - Current dhikr number out of total (e.g., "3/12")
   - Estimated time remaining
   - Home button (top left)
   - Settings button (top right)

2. Dhikr Card
   - Elevated card design with rounded corners
   - Three sections with clear visual separation:
     a. Arabic Text
        - Large, clear Arabic font
        - Right-to-left alignment
        - Optional vowel marks (تشكيل)
     
     b. Transliteration
        - Clear Latin script
        - Pronunciation guide
        - Slightly smaller than Arabic
     
     c. Translation
        - English translation
        - Regular reading font
        - Left-aligned

3. Counter Section
   - Large circular progress indicator
   - Current count / Total required counts
   - "Tap to Count" button or entire card tappable
   - Haptic feedback on tap
   - Visual feedback animation on completion

4. Navigation Controls
   - Previous/Next buttons (if manual navigation allowed)
   - Home button
   - Optional audio control button

## 3. Session Complete Screen
### Layout
- Fullscreen celebration design
- Centered content
- Bottom action buttons

### Components
1. Completion Message
   - Congratulatory text
   - Session statistics
   - Achievement unlocked (if applicable)

2. Action Buttons
   - "Return to Home" (primary)
   - "Share Achievement" (secondary)
   - "Start New Session" (secondary)

## 4. Settings Screen
### Layout
- Standard settings list layout
- Grouped preferences

### Components
1. Display Settings
   - Arabic font size
   - Translation font size
   - Theme selection (Light/Dark)
   - Language preference

2. Audio Settings
   - Enable/disable audio
   - Audio volume
   - Auto-play preferences

3. Notification Settings
   - Daily reminders
   - Custom reminder times
   - Notification sound

4. Progress & Data
   - View statistics
   - Export data
   - Reset progress
   - Clear data

## Global UI Elements
### Typography
1. Arabic Text
   - Font: Traditional Arabic or Amiri
   - Size: 24-32sp for main text
   - Weight: Regular/Bold

2. Latin Text
   - Font: System default or Roboto
   - Size: 16-20sp for main text
   - Weight: Regular/Medium

### Color Scheme
1. Primary Colors
   - Morning theme: Warm colors (e.g., #FF9800)
   - Evening theme: Cool colors (e.g., #3F51B5)

2. Secondary Colors
   - Background: Light neutral (#F5F5F5)
   - Text: Dark grey (#212121)
   - Accents: Theme-dependent

### Animations & Transitions
1. Screen Transitions
   - Smooth fade or slide transitions
   - 300ms duration
   - Easing: ease-in-out

2. Counter Feedback
   - Ripple effect on tap
   - Counter increment animation
   - Completion celebration animation

### Accessibility
1. Text Scaling
   - Support for system font scaling
   - Minimum touch target size: 48x48dp

2. Color Contrast
   - Meet WCAG 2.1 AA standards
   - Alternative themes for color-blind users

3. Screen Readers
   - Clear labels for all interactive elements
   - Proper heading hierarchy
   - Meaningful descriptions for images/icons
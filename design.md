# Interlace Studies Design

## Overview
This document outlines the design principles and architecture for Interlace Studies, based on the established brand guidelines and visual system.

## Goals
- Provide a clear and intuitive user experience.
- Ensure scalability and maintainability.
- Follow best practices for web accessibility and performance.

## Design System

### Color Palette (Design Tokens)
- **Primary / Brand**: 
  - `--interlace-deep`: `#0050C9` (icon, upper weave band)
  - `--interlace-sky`: `#066aab` (icon, lower weave band — accent)
- **Neutrals**: 
  - `--ink` / `--dark-navy`: `#133149` (wordmark fill, main text)
  - `--paper`: `#fbfaf8` (warm-neutral ground background)
  - `--paper-raised`: `#ffffff` (elevated surface background)
  - `--slate` / `--muted-grey`: `#a2a2a2` ("STUDIES" wordmark grey, secondary text)
  - `--line`: `rgba(3,4,5,0.10)` (borders and dividers)
- **Signal / States**: 
  - `--signal`: `#1e9e7c` (success/completion)
  - `--signal-bg`: `rgba(30,158,124,0.1)` (completion / approved states background)
  - `--bg-soft-blue`: `#eaf6ff` (soft blue background utility)

### Typography
- **Headings (h1-h6)**: `'Playfair Display', serif` (font-weight: 700, 800) - used for module titles, banner headers.
- **Body / Main UI**: `'Poppins', sans-serif` (font-weight: 300-800) - standard font for all body text, buttons, and navigation.
- **Data / Badges / Numbers**: `'IBM Plex Mono', monospace` (font-weight: 500, 600) - used for module numbers, progress percentages, and status badges.
- **Alternative / Utility**: `'Inter', sans-serif` is also available in the stack.

### Visual Elements
- **Border Radius**: Base radius `12px` (`--radius`), large `16px` (`--radius-lg`), pill `50px` (`--radius-pill`).
- **Shadows**: Soft, multi-layered shadows for elevation.
  - `--shadow`: `0 2px 4px rgba(0,0,0,0.075)`
  - `--shadow-lg`: `0 4px 8px rgba(0,0,0,0.05), 0 16px 40px rgba(0,0,0,0.10)`
- **Transitions**: Smooth easing `0.3s cubic-bezier(0.4,0,0.2,1)`.

## Architecture
[Detailed architectural diagrams and descriptions will go here]

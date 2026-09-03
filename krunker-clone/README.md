# HAMU STRIKE — LONEWOLF 1v1

Open `index.html` in Chrome/Edge while online so Three.js can load from jsDelivr.

## Mode
1. Main Menu → **1v1 LONEWOLF**
2. **FIGHT WITH AI** for an offline playable 1v1.
3. **FIGHT WITH ONLINE PLAYERS** runs a queue UI. This single-file browser build has no game server, so if no real player is available it starts a practice opponent. A true online matchmaker needs a WebSocket/WebRTC backend.

## Economy
- Every Lonewolf match starts at **500 COINS**.
- **USP = 500 COINS** and is the starting sidearm.
- SMG = 900, Assault Rifle = 1400, Shotgun = 2000.
- Winning a round awards **+300 COINS**.
- Coins exist only inside Lonewolf and reset when you leave the mode.
- The 5-second BUY PHASE freezes movement and shows the weapon shop.

## Controls
- WASD = move
- Mouse = aim (standard FPS direction)
- Left Mouse = fire
- R = reload
- 1/2/3/4 = weapon
- Space = jump
- Shift = dash
- C = slide
- Q = build wall
- E = rotate build
- Right Mouse = cancel build
- Esc = pause

## Notes
The arena is intentionally small for direct 1v1 combat. Enemy count is exactly one in Lonewolf. Builds use solid collision so the player cannot walk through them.

# Portfolio Website - Build Progress

## User Info
- Name: Choi Taewoong (최태웅)
- School: SKKU Mechanical Engineering (2021310230)
- Lab: SKKU Robotics Innovatory (Undergraduate Researcher)
- Theme color: #0d2b73

## File Structure
```
src/
  App.js              ← Simplified (just renders Portfolio)
  index.css           ← Base reset + fonts
  Portfolio.js        ← Main single-page portfolio component
  Portfolio.css       ← All styles (#0d2b73 scheme)
  imgs/
    my_photo.jpg      ← Profile photo (existing)
    background.jpg    ← Hero background (existing)
```

## Sections
1. Hero / Intro
2. About
3. Experience (SKKU Robotics Innovatory)
4. Projects (3 projects)
5. Skills
6. Education
7. Contact

## Projects
1. Uncertainty-Aware Sensor Fusion (강현창.pdf 참고)
   - LiDAR + Radar DOGM
   - Graph Attention Network spatiotemporal noise modeling
   - Tools: Python, PyTorch, ROS2, PyTorch Geometric

2. Bartender Robot Arm
   - 4-axis 3D printed arm
   - Dynamixel XL430
   - ROS2 MoveIt!

3. Autonomous Driving for All-Wheel Steering Robot (URP 발표.pdf 참고)
   - URDF modeling, Ackermann kinematics
   - Gazebo simulation, ROS Navigation Stack
   - Tools: Python, C++, ROS, Gazebo

## Progress Checklist
- [x] Read existing portfolio (chemx3937)
- [x] Read 강현창.pdf (sensor fusion research)
- [x] Read 25 여름학기 urp 발표.pdf (all-wheel steering robot)
- [x] Write PROGRESS.md
- [x] Write src/index.css
- [x] Write src/App.js
- [x] Write src/Portfolio.js
- [x] Write src/Portfolio.css
- [x] Update public/index.html
- [x] Test build — SUCCESS (64.86 kB gzipped)

## STATUS: COMPLETE ✓
Run `npm start` in personal_website directory to preview locally.

## TODO (optional improvements)
- [ ] Add your real GitHub / LinkedIn / Email links in Portfolio.js (search "taewoong@skku.edu", "github.com/taewoong", "linkedin.com/in/taewoong")
- [ ] Replace profile photo path if needed (currently uses src/imgs/my_photo.jpg)
- [ ] Add more projects or publications as needed

## Resume After Interruption
If interrupted, resume from the last unchecked item above.
Run `npm start` in personal_website directory to test.

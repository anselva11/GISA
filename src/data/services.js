import { Cable, Network, Server, HardDrive, Shield, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const services = [
  {
    id: "fiber-installation",
    title: "Fiber Optic Installation",
    description: "Professional fiber deployment, termination, splicing, and testing for high-speed reliable connectivity.",
    process: ["Site Survey", "Cable Pulling", "Splicing", "OTDR Testing", "Handover"],
    benefits: ["High Bandwidth", "Low Latency", "Future-proof infrastructure", "Minimal signal loss"],
    icon: Cable
  },
  {
    id: "network-installation",
    title: "Network Installation",
    description: "End-to-end LAN, WAN, Wi-Fi, router, switch, and network deployment for businesses of all sizes.",
    process: ["Requirement Analysis", "Network Design", "Hardware Provisioning", "Configuration", "Optimization"],
    benefits: ["Seamless connectivity", "Scalable architecture", "Enhanced security", "High availability"],
    icon: Network
  },
  {
    id: "server-installation",
    title: "Server Installation",
    description: "Expert server, NAS, rack, UPS, storage, and infrastructure installation and configuration.",
    process: ["Capacity Planning", "Hardware Mounting", "OS/Hypervisor Install", "Network Config", "Stress Testing"],
    benefits: ["Optimized performance", "Data redundancy", "Centralized management", "Maximized uptime"],
    icon: Server
  },
  {
    id: "data-center",
    title: "Data Center Infrastructure",
    description: "Comprehensive rack, cable management, fiber, power, and connectivity infrastructure build-outs.",
    process: ["Space Planning", "Cooling/Power Design", "Rack Installation", "Cabling", "Commissioning"],
    benefits: ["Efficient cooling", "Organized cabling", "Power redundancy", "Scalable space"],
    icon: HardDrive
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    description: "Professional copper and fiber structured cabling systems following industry standards.",
    process: ["Pathways Design", "Cable Routing", "Termination", "Fluke Testing", "Labeling"],
    benefits: ["Standardized infrastructure", "Easy troubleshooting", "Aesthetic organization", "Reliable performance"],
    icon: Zap
  },
  {
    id: "cctv-installation",
    title: "CCTV Installation",
    description: "IP CCTV, NVR, PoE, and surveillance infrastructure deployment for maximum security.",
    process: ["Vulnerability Assessment", "Camera Positioning", "Wiring", "NVR Setup", "Remote Access Config"],
    benefits: ["24/7 Monitoring", "High-definition recording", "Deterrence", "Centralized viewing"],
    icon: ShieldCheck
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Preventive maintenance, troubleshooting, hardware replacement, and SLA technical support.",
    process: ["Audit & Inventory", "Scheduled Cleaning", "Firmware Updates", "Issue Resolution", "Reporting"],
    benefits: ["Extended hardware lifespan", "Reduced downtime", "Predictable IT costs", "Expert assistance"],
    icon: Wrench
  },
  {
    id: "otdr-testing",
    title: "OTDR Testing",
    description: "Precision fiber testing, troubleshooting, and certification to ensure link integrity.",
    process: ["Link Cleaning", "OTDR Scanning", "Loss Measurement", "Fault Location", "Certification Report"],
    benefits: ["Verified link quality", "Fast fault isolation", "Standard compliance", "Detailed documentation"],
    icon: Shield
  }
];

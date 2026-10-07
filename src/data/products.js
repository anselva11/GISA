import ftthCableImage from '../assets/FTTH Drop Cable 2 Core.jpg';
import arubaImage from '../assets/aruba_ap-515_1.jpg';

export const products = [
  // Fiber Optic
  {
    id: "fo-001",
    name: "Outdoor Fiber Optic Cable 12 Core",
    category: "Fiber Optic",
    brand: "GISA-Link",
    sku: "FO-12C-OD",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    description: "High-durability outdoor single mode fiber optic cable with steel tape armoring, suitable for harsh environments.",
    specifications: { "Core": "12 Core", "Type": "Single Mode", "Jacket": "PE Outdoor", "Armor": "Steel Tape" }
  },
  {
    id: "fo-002",
    name: "Fiber Optic Distribution Box 24 Core",
    category: "Fiber Optic",
    brand: "GISA-Link",
    sku: "FO-OTB-24",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    description: "Rackmount Optical Termination Box suitable for managing up to 24 cores in data centers and telecom rooms.",
    specifications: { "Capacity": "24 Core", "Mount": "19-inch Rack", "Material": "Cold Rolled Steel", "Adapters": "SC/UPC" }
  },
  {
    id: "fo-003",
    name: "FTTH Drop Cable 2 Core",
    category: "Fiber Optic",
    brand: "GISA-Link",
    sku: "FO-FTTH-2C",
    image: ftthCableImage,
    description: "Indoor/outdoor FTTH drop cable with FRP messenger, ideal for last-mile residential deployments.",
    specifications: { "Core": "2 Core", "Type": "Single Mode G.657A", "Messenger": "FRP", "Length": "1000m/roll" }
  },

  // Network Hardware
  {
    id: "net-001",
    name: "Managed Enterprise Switch 24-Port",
    category: "Network Hardware",
    brand: "Cisco",
    sku: "SW-M24-G",
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=600&auto=format&fit=crop",
    description: "High-performance L2+ managed switch for enterprise networks with 4 SFP+ uplink ports.",
    specifications: { "Ports": "24 Gigabit", "Uplink": "4x 10G SFP+", "Management": "Managed", "PoE": "No" }
  },
  {
    id: "net-002",
    name: "Wireless Access Point Wi-Fi 6",
    category: "Network Hardware",
    brand: "Aruba",
    sku: "AP-W6-PRO",
    image: arubaImage,
    description: "High-density Wi-Fi 6 access point for corporate offices, providing reliable and fast wireless connectivity.",
    specifications: { "Standard": "802.11ax (Wi-Fi 6)", "Bands": "Dual-Band 2.4/5GHz", "Throughput": "up to 3.0 Gbps", "Power": "PoE+" }
  },
  {
    id: "net-003",
    name: "Next-Gen Edge Firewall",
    category: "Network Hardware",
    brand: "Fortinet",
    sku: "FW-EDGE-100",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=600&auto=format&fit=crop",
    description: "Enterprise-grade edge firewall providing advanced threat protection, VPN, and SD-WAN capabilities.",
    specifications: { "Throughput": "5 Gbps", "Ports": "8x RJ45, 2x SFP", "Features": "IPS, Antivirus, Web Filter", "Form Factor": "1U Rackmount" }
  },

  // Home Server
  {
    id: "hs-001",
    name: "Personal NAS Storage 4-Bay",
    category: "Home Server",
    brand: "Synology",
    sku: "NAS-4B-H",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=600&auto=format&fit=crop",
    description: "Compact 4-bay NAS designed for home offices and creators needing reliable private cloud storage.",
    specifications: { "Bays": "4", "Processor": "Quad-core 2.0GHz", "RAM": "4GB (Upgradable)", "Network": "2x Gigabit LAN" }
  },
  {
    id: "hs-002",
    name: "Compact Home Lab Server",
    category: "Home Server",
    brand: "GISA-Sys",
    sku: "SRV-MINI-01",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    description: "Silent, compact server ideal for developers running Docker containers or virtualization at home.",
    specifications: { "CPU": "8-Core Mini-ITX", "RAM": "32GB ECC", "Storage": "1TB NVMe + 4TB HDD", "Form Factor": "Mini Tower" }
  },

  // Office Server
  {
    id: "os-001",
    name: "Enterprise Rack Server 2U",
    category: "Office Server",
    brand: "Dell",
    sku: "SRV-R2U-E",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    description: "Dual-socket 2U rack server built for intensive workloads, databases, and enterprise virtualization.",
    specifications: { "CPU": "2x Intel Xeon Silver", "RAM": "128GB ECC", "Storage": "8x 2.5\" SAS/SATA Bays", "Power": "Dual Redundant 800W" }
  },
  {
    id: "os-002",
    name: "Office Tower Server",
    category: "Office Server",
    brand: "HPE",
    sku: "SRV-TOW-B",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop",
    description: "Quiet and reliable tower server for SMEs lacking a dedicated server room, perfect for file sharing and AD.",
    specifications: { "CPU": "Intel Xeon E-2200", "RAM": "32GB ECC", "Storage": "4x 3.5\" LFF Bays", "Form Factor": "Tower" }
  },

  // Data Center
  {
    id: "dc-001",
    name: "Server Rack Cabinet 42U",
    category: "Data Center",
    brand: "GISA-Rack",
    sku: "RACK-42U-800",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    description: "Heavy-duty 42U server cabinet with perforated doors for maximum airflow in data center environments.",
    specifications: { "Height": "42U", "Width": "800mm", "Depth": "1000mm", "Load Capacity": "1200kg" }
  },
  {
    id: "dc-002",
    name: "Intelligent PDU 30-Outlet",
    category: "Data Center",
    brand: "APC",
    sku: "PDU-M-30",
    image: "https://images.unsplash.com/photo-1620283085068-5aab1b54a78c?q=80&w=600&auto=format&fit=crop",
    description: "Metered and switchable Power Distribution Unit (PDU) for granular power control and monitoring.",
    specifications: { "Outlets": "24x C13, 6x C19", "Input": "3-Phase 32A", "Monitoring": "Per-outlet metering", "Form Factor": "0U Vertical" }
  },

  // Structured Cabling
  {
    id: "sc-001",
    name: "Cat6A UTP Cable 305m",
    category: "Structured Cabling",
    brand: "Belden",
    sku: "CBL-C6A-UTP",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    description: "High-performance Cat6A UTP solid copper cable for 10Gbps network deployments.",
    specifications: { "Category": "Cat6A", "Type": "UTP Solid Copper", "Length": "305m (1000ft)", "Jacket": "LSZH" }
  },
  {
    id: "sc-002",
    name: "Modular Patch Panel 24-Port",
    category: "Structured Cabling",
    brand: "CommScope",
    sku: "PP-24P-M",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    description: "Unloaded 24-port keystone patch panel for neat and organized rack cable management.",
    specifications: { "Ports": "24", "Type": "Unloaded Keystone", "Mount": "19-inch 1U", "Material": "Steel" }
  },

  // CCTV & Security
  {
    id: "cctv-001",
    name: "4MP Bullet IP Camera",
    category: "CCTV & Security",
    brand: "Hikvision",
    sku: "CAM-IP-4MP-B",
    image: "https://images.unsplash.com/photo-1557200234-df98275997db?q=80&w=600&auto=format&fit=crop",
    description: "High-definition outdoor bullet camera with EXIR night vision and PoE support.",
    specifications: { "Resolution": "4 Megapixel", "Lens": "2.8mm Fixed", "Night Vision": "30m IR", "Protection": "IP67 Weatherproof" }
  },
  {
    id: "cctv-002",
    name: "32-Channel NVR",
    category: "CCTV & Security",
    brand: "Dahua",
    sku: "NVR-32CH-4K",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop",
    description: "Enterprise Network Video Recorder supporting up to 32 4K cameras with multiple HDD bays.",
    specifications: { "Channels": "32", "Resolution": "Up to 12MP/4K", "Storage": "4x SATA Bays", "Output": "HDMI/VGA" }
  },
  {
    id: "cctv-003",
    name: "Biometric Access Control Terminal",
    category: "CCTV & Security",
    brand: "ZKTeco",
    sku: "ACC-BIO-F1",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=600&auto=format&fit=crop",
    description: "Advanced face and fingerprint recognition terminal for secure door access.",
    specifications: { "Authentication": "Face, Fingerprint, Card", "Capacity": "3000 Faces", "Connection": "TCP/IP, Wi-Fi", "Relay": "Door Lock Control" }
  },

  // Power & Infrastructure
  {
    id: "pwr-001",
    name: "Smart UPS 3kVA Online",
    category: "Power & Infrastructure",
    brand: "APC",
    sku: "UPS-3K-ON",
    image: "https://images.unsplash.com/photo-1620283085068-5aab1b54a78c?q=80&w=600&auto=format&fit=crop",
    description: "Double-conversion online UPS providing clean, uninterrupted power to critical servers.",
    specifications: { "Capacity": "3000VA / 2700W", "Topology": "Online Double Conversion", "Form Factor": "2U Rack/Tower", "Network": "Optional SNMP Card" }
  },
  {
    id: "pwr-002",
    name: "Galvanized Cable Tray 300mm",
    category: "Power & Infrastructure",
    brand: "GISA-Infra",
    sku: "TRAY-HDG-300",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
    description: "Hot-dip galvanized perforated cable tray for robust industrial cable routing.",
    specifications: { "Width": "300mm", "Length": "3000mm", "Material": "Steel HDG", "Type": "Perforated" }
  },
  {
    id: "pwr-003",
    name: "Industrial Surge Protector",
    category: "Power & Infrastructure",
    brand: "GISA-Power",
    sku: "SPD-3P-40KA",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    description: "3-Phase Surge Protective Device to safeguard distribution boards from voltage spikes.",
    specifications: { "Poles": "3P+N", "Max Discharge Current": "40kA", "Voltage": "385V AC", "Mount": "DIN Rail" }
  }
];

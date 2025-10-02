import React, { useState } from 'react';
import { Package, ChevronDown, ChevronUp } from 'lucide-react';

const MarineDroneEquipmentList = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // รายการอุปกรณ์โดรนและระบบ
  const equipmentItems = [
    {
      id: 'drones',
      category: 'โดรนและอุปกรณ์การบิน',
      items: [
        {
          no: 1,
          name: 'โดรน Multirotor มาตรฐานทางทะเล',
          brand: 'DJI Matrice 350 RTK',
          specs: [
            'ระยะบินสูงสุด 15 กม.',
            'เวลาบิน 55 นาที (ไม่มีน้ำหนักบรรทุก)',
            'รองรับน้ำหนักบรรทุก 2.7 กก.',
            'ทนลม 12 m/s',
            'กันน้ำ IP55',
            'RTK Positioning ความแม่นยำ ±0.1 เมตร'
          ],
          qty: 4,
          unit: 'ชุด',
          pricePerUnit: 850000
        },
        {
          no: 2,
          name: 'แบตเตอรี่สำรอง TB65 Intelligent Flight Battery',
          brand: 'DJI',
          specs: [
            'ความจุ 5880mAh',
            'แรงดัน 44.76V',
            'อุณหภูมิการทำงาน -20°C ถึง 50°C',
            'รองรับการชาร์จเร็ว'
          ],
          qty: 16,
          unit: 'ก้อน',
          pricePerUnit: 35000
        },
        {
          no: 3,
          name: 'สถานีชาร์จแบตเตอรี่ BS65 Intelligent Battery Station',
          brand: 'DJI',
          specs: [
            'ชาร์จพร้อมกัน 8 ก้อน',
            'Fast Charging Mode',
            'Storage Mode สำหรับเก็บระยะยาว',
            'แสดงสถานะแบตเตอรี่'
          ],
          qty: 2,
          unit: 'เครื่อง',
          pricePerUnit: 120000
        },
        {
          no: 4,
          name: 'รีโมทคอนโทรล DJI RC Plus',
          brand: 'DJI',
          specs: [
            'จอแสดงผล 7 นิ้ว 1920×1200',
            'ความสว่างสูงสุด 1200 nits',
            'ระยะส่งสัญญาณ 15 กม.',
            'แบตเตอรี่ในตัว 5 ชั่วโมง'
          ],
          qty: 4,
          unit: 'เครื่อง',
          pricePerUnit: 180000
        }
      ]
    },
    {
      id: 'cameras',
      category: 'กล้องและเซ็นเซอร์',
      items: [
        {
          no: 5,
          name: 'กล้อง Multispectral Zenmuse P1',
          brand: 'DJI',
          specs: [
            'Full-Frame Sensor 45MP',
            'เลนส์ 35mm',
            'TimeSync 2.0 microsecond',
            'Global Shutter',
            'Smart Oblique Capture',
            'ถ่ายภาพความละเอียดสูงเพื่อตรวจจับคราบน้ำมัน'
          ],
          qty: 1,
          unit: 'ชุด',
          pricePerUnit: 950000
        },
        {
          no: 6,
          name: 'กล้องความร้อน Zenmuse H20T',
          brand: 'DJI',
          specs: [
            'กล้องความร้อน 640×512 @ 30fps',
            'กล้อง Wide 12MP',
            'กล้อง Zoom 20MP',
            'Laser Rangefinder 1200m',
            'ตรวจจับความร้อนในเวลากลางคืน'
          ],
          qty: 2,
          unit: 'ชุด',
          pricePerUnit: 1250000
        },
        {
          no: 7,
          name: 'เซ็นเซอร์ตรวจจับก๊าซพิษ MultiGas Detector',
          brand: 'Sniffer4D',
          specs: [
            'ตรวจจับ VOC, H2S, SO2, CO',
            'ช่วงการตรวจจับ 0-100 ppm',
            'เวลาตอบสนอง < 3 วินาที',
            'น้ำหนักเบา 450g',
            'ส่งข้อมูลแบบ Real-time'
          ],
          qty: 4,
          unit: 'ชุด',
          pricePerUnit: 380000
        }
      ]
    },
    {
      id: 'communication',
      category: 'ระบบสื่อสารและควบคุม',
      items: [
        {
          no: 8,
          name: 'ระบบสื่อสาร 4G/5G Module',
          brand: 'Skydio Enterprise',
          specs: [
            'รองรับ 4G LTE และ 5G',
            'Dual SIM',
            'Auto-switching network',
            'ส่งข้อมูล Real-time Video Streaming',
            'Latency ต่ำกว่า 200ms'
          ],
          qty: 4,
          unit: 'ชุด',
          pricePerUnit: 150000
        },
        {
          no: 9,
          name: 'ระบบสื่อสารผ่านดาวเทียม Satellite Communication Kit',
          brand: 'Iridium Certus',
          specs: [
            'ครอบคลุมทั่วโลก',
            'ความเร็ว 352 Kbps',
            'สำรองสัญญาณกรณีพ้นพื้นที่ 4G/5G',
            'Two-way messaging'
          ],
          qty: 2,
          unit: 'ชุด',
          pricePerUnit: 420000
        },
        {
          no: 10,
          name: 'Ground Control Station (GCS) พร้อมซอฟต์แวร์',
          brand: 'DJI FlightHub 2',
          specs: [
            'คอมพิวเตอร์ Workstation สเปคสูง',
            'จอแสดงผล 32 นิ้ว 4K',
            'ซอฟต์แวร์ FlightHub 2 Enterprise',
            'Real-time Fleet Management',
            'Cloud Mapping & Analytics'
          ],
          qty: 2,
          unit: 'ชุด',
          pricePerUnit: 450000
        }
      ]
    },
    {
      id: 'software',
      category: 'ซอฟต์แวร์และระบบวิเคราะห์',
      items: [
        {
          no: 11,
          name: 'ระบบวิเคราะห์และแจ้งเหตุ AI-Powered Marine Monitoring System',
          brand: 'Custom Development',
          specs: [
            'AI Image Recognition สำหรับตรวจจับคราบน้ำมัน',
            'Machine Learning Oil Spill Classification',
            'Real-time Alert System',
            'GIS Mapping Integration',
            'Database Management System',
            'Dashboard & Reporting Module',
            'Mobile Application (iOS/Android)',
            'API Integration with Government Systems'
          ],
          qty: 1,
          unit: 'ระบบ',
          pricePerUnit: 3500000
        },
        {
          no: 12,
          name: 'ซอฟต์แวร์วางแผนเส้นทางบิน Mission Planning Software',
          brand: 'DJI Terra + Pix4D',
          specs: [
            'Flight Route Optimization',
            '3D Reconstruction',
            'Automated Mission Planning',
            'License แบบ Perpetual',
            '59 Waypoints (ท่าเทียบเรือทั้งหมด)'
          ],
          qty: 1,
          unit: 'License',
          pricePerUnit: 450000
        }
      ]
    },
    {
      id: 'accessories',
      category: 'อุปกรณ์เสริมและอะไหล่',
      items: [
        {
          no: 13,
          name: 'ใบพัดสำรอง',
          brand: 'DJI Original',
          specs: [
            'ใบพัดคาร์บอนไฟเบอร์',
            'Quick Release Design',
            'Self-tightening'
          ],
          qty: 32,
          unit: 'ชุด',
          pricePerUnit: 3500
        },
        {
          no: 14,
          name: 'กระเป๋าเก็บและขนส่งโดรน Carrying Case',
          brand: 'Nanuk',
          specs: [
            'กันน้ำ IP67',
            'กันกระแทก',
            'Foam Padding แบบปรับได้',
            'ล้อลาก'
          ],
          qty: 4,
          unit: 'ใบ',
          pricePerUnit: 28000
        },
        {
          no: 15,
          name: 'ชุดเครื่องมือซ่อมบำรุง Maintenance Kit',
          brand: 'DJI Enterprise',
          specs: [
            'ชุดเครื่องมือพื้นฐาน',
            'อุปกรณ์ทำความสะอาด',
            'Calibration Tools',
            'Testing Equipment'
          ],
          qty: 2,
          unit: 'ชุด',
          pricePerUnit: 85000
        }
      ]
    },
    {
      id: 'training',
      category: 'การอบรมและใบอนุญาต',
      items: [
        {
          no: 16,
          name: 'หลักสูตรอบรม Drone Pilot License (CAAT)',
          brand: 'สมาคมโดรนไทย',
          specs: [
            'อบรมผู้ควบคุมโดรน 5 คน',
            'ทฤษฎี 40 ชั่วโมง',
            'ปฏิบัติ 60 ชั่วโมง',
            'สอบใบอนุญาต CAAT',
            'รวมค่าสอบและใบอนุญาต 2 ปี'
          ],
          qty: 5,
          unit: 'คน',
          pricePerUnit: 85000
        },
        {
          no: 17,
          name: 'การอบรมการใช้งานระบบ System Training',
          brand: 'On-site Training',
          specs: [
            'อบรมการใช้งานโดรน 3 วัน',
            'อบรมระบบซอฟต์แวร์ 3 วัน',
            'อบรมการบำรุงรักษา 2 วัน',
            'Workshop ภาคสนาม 2 วัน'
          ],
          qty: 1,
          unit: 'โครงการ',
          pricePerUnit: 350000
        }
      ]
    },
    {
      id: 'operations',
      category: 'การดำเนินงานและบริการ',
      items: [
        {
          no: 18,
          name: 'ค่าดำเนินการบินตรวจการณ์ (12 เดือน)',
          brand: 'Service Contract',
          specs: [
            'บินตรวจการณ์ 59 ท่าเทียบเรือ',
            'วันจันทร์-ศุกร์ วันละ 2 รอบ',
            'วันเสาร์ จำนวน 1 รอบ',
            'Pilot 3 คน (เปลี่ยนเวรหมุนเวียน)',
            'น้ำมันเชื้อเพลิง',
            'ค่าใช้จ่ายในการเดินทาง'
          ],
          qty: 12,
          unit: 'เดือน',
          pricePerUnit: 350000
        },
        {
          no: 19,
          name: 'บริการบำรุงรักษาและซ่อมแซม (12 เดือน)',
          brand: 'Maintenance Contract',
          specs: [
            'ตรวจสอบและบำรุงรักษารายเดือน',
            'ซ่อมแซมอุปกรณ์ที่ชำรุด',
            'เปลี่ยนอะไหล่ตามอายุการใช้งาน',
            'Firmware Updates',
            'ทีมช่างประจำ 2 คน'
          ],
          qty: 12,
          unit: 'เดือน',
          pricePerUnit: 180000
        },
        {
          no: 20,
          name: 'ค่าบริการข้อมูล 4G/5G และดาวเทียม (12 เดือน)',
          brand: 'Service Provider',
          specs: [
            'Unlimited Data 4G/5G',
            'Multi-SIM 6 ใบ',
            'บริการดาวเทียม 500 MB/เดือน',
            'Static IP Address'
          ],
          qty: 12,
          unit: 'เดือน',
          pricePerUnit: 45000
        }
      ]
    },
    {
      id: 'insurance',
      category: 'ประกันภัยและใบอนุญาต',
      items: [
        {
          no: 21,
          name: 'ประกันภัยโดรน Hull & Liability Insurance',
          brand: 'บริษัทประกันชั้นนำ',
          specs: [
            'คุ้มครองตัวเครื่อง 15 ล้านบาท',
            'ความรับผิดต่อบุคคลภายนอก 10 ล้านบาท',
            'ความเสียหายต่อทรัพย์สิน 5 ล้านบาท',
            'คุ้มครอง 4 เครื่อง'
          ],
          qty: 1,
          unit: 'ปี',
          pricePerUnit: 380000
        },
        {
          no: 22,
          name: 'ใบอนุญาตบินโดรน CAAT (4 เครื่อง)',
          brand: 'สำนักงานการบินพลเรือนแห่งประเทศไทย',
          specs: [
            'ทะเบียนโดรน',
            'ใบรับรองความปลอดภัย',
            'ใบอนุญาตบินในพื้นที่ควบคุม',
            'รวม 4 เครื่อง'
          ],
          qty: 4,
          unit: 'เครื่อง',
          pricePerUnit: 15000
        }
      ]
    }
  ];

  // คำนวณราคารวม
  const calculateTotal = () => {
    let subtotal = 0;
    equipmentItems.forEach(category => {
      category.items.forEach(item => {
        subtotal += item.pricePerUnit * item.qty;
      });
    });
    const vat = subtotal * 0.07;
    const total = subtotal + vat;
    return { subtotal, vat, total };
  };

  const { subtotal, vat, total } = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Package className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold">รายการอุปกรณ์และราคา</h1>
              <p className="text-blue-100 mt-1">โครงการโดรนตรวจการณ์ทางทะเล</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <p className="text-sm text-gray-600 mb-1">จำนวนรายการ</p>
            <p className="text-3xl font-bold text-blue-600">22</p>
            <p className="text-xs text-gray-500 mt-1">รายการ</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
            <p className="text-sm text-gray-600 mb-1">ราคารวม (ก่อน VAT)</p>
            <p className="text-2xl font-bold text-green-600">{subtotal.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">บาท</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
            <p className="text-sm text-gray-600 mb-1">VAT 7%</p>
            <p className="text-2xl font-bold text-orange-600">{vat.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">บาท</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-md p-6 text-white">
            <p className="text-sm mb-1">ราคารวมทั้งสิ้น</p>
            <p className="text-2xl font-bold">{total.toLocaleString()}</p>
            <p className="text-xs mt-1">บาท (รวม VAT)</p>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="space-y-4">
          {equipmentItems.map((category) => {
            const categoryTotal = category.items.reduce((sum, item) => sum + (item.pricePerUnit * item.qty), 0);
            const isExpanded = expandedCategories[category.id];

            return (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    <div className="text-left">
                      <h3 className="text-lg font-bold">{category.category}</h3>
                      <p className="text-sm text-blue-100">{category.items.length} รายการ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold">{categoryTotal.toLocaleString()}</p>
                      <p className="text-xs text-blue-100">บาท</p>
                    </div>
                    {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </button>

                {/* Category Items */}
                {isExpanded && (
                  <div className="divide-y divide-gray-200">
                    {category.items.map((item) => (
                      <div key={item.no} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-4">
                          {/* Item Number */}
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {item.no}
                          </div>

                          {/* Item Details */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">ยี่ห้อ/รุ่น: {item.brand}</p>

                            {/* Specs */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                              <p className="text-sm font-semibold text-gray-700 mb-2">คุณสมบัติ:</p>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {item.specs.map((spec, idx) => (
                                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Price Info */}
                            <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                              <div>
                                <p className="text-xs text-gray-600">จำนวน</p>
                                <p className="text-lg font-bold text-gray-800">{item.qty} {item.unit}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600">ราคาต่อหน่วย</p>
                                <p className="text-lg font-bold text-gray-800">{item.pricePerUnit.toLocaleString()} บาท</p>
                              </div>
                              <div className="ml-auto">
                                <p className="text-xs text-gray-600">ราคารวม</p>
                                <p className="text-2xl font-bold text-blue-600">{(item.pricePerUnit * item.qty).toLocaleString()} บาท</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8 border-t-4 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">สรุปราคารวม</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-lg text-gray-700">ราคารวม (Subtotal)</span>
              <span className="text-2xl font-bold text-gray-800">{subtotal.toLocaleString()} บาท</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-lg text-gray-700">ภาษีมูลค่าเพิ่ม 7% (VAT)</span>
              <span className="text-2xl font-bold text-gray-800">{vat.toLocaleString()} บาท</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-bold text-gray-800">ราคารวมทั้งสิ้น (Grand Total)</span>
              <span className="text-4xl font-bold text-blue-600">{total.toLocaleString()} บาท</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <p className="text-center text-lg text-gray-700">
                ({new Intl.NumberFormat('th-TH').format(total)}บาทถ้วน)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarineDroneEquipmentList;
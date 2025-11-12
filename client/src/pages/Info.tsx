import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Gift, Backpack } from "lucide-react";
import { souvenirs, packingList } from "@/data/itinerary";

export default function Info() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-accent/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">ข้อมูลเพิ่มเติม</h1>
          <p className="text-lg mt-2 opacity-90">ของฝากและรายการเตรียมตัว</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Souvenirs Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gift className="w-6 h-6 text-primary" />
              ของฝากและของขึ้นชื่อ
            </CardTitle>
            <CardDescription className="text-base">
              สินค้าและผลิตภัณฑ์ยอดนิยมจากนิวซีแลนด์
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {souvenirs.map((souvenir, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card"
                >
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {souvenir.name}
                  </h3>
                  <p className="text-muted-foreground">{souvenir.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Packing List Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Backpack className="w-6 h-6 text-primary" />
              รายการเตรียมตัว
            </CardTitle>
            <CardDescription className="text-base">
              สิ่งของที่ควรเตรียมสำหรับการเดินทาง
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {packingList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Important Note */}
        <Card className="mt-8 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">⚠️ ข้อควรระวัง</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">
              <strong style={{color: '#f91f1f'}}>ห้ามนำอาหารหรือของสดใด ๆ เข้าประเทศนิวซีแลนด์โดยเด็ดขาด</strong>
              <br />
              เนื่องจากด่านตรวจคนเข้าเมืองของนิวซีแลนด์มีความเข้มงวดมาก การไม่ปฏิบัติตามกฎอาจทำให้ถูกปรับเงิน
              หากจำเป็นต้องพกสิ่งของเหล่านี้ โปรดจำและสามารถชี้แจงให้เจ้าหน้าที่ทราบได้อย่างถูกต้อง
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

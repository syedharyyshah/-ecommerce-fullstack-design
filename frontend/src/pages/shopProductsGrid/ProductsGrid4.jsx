import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductsGrid4 = () => {
  return (
    <div className="container mx-auto mt-10">
      <h3 className="text-2xl font-bold mb-4">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <img src="https://www.cheerleading.com/media/catalog/product/cache/0f63c8711292e9db24fc151bd12a7e63/c/c/ccstsc-standardcolortee-red_21.jpg" alt="T-shirt" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$10.30 - T-shirts with multiple colors, for men</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="http://ru-static.4stand.com/huge/0c/b2/0cb22e602b6d1d887791738f43fb8a2626615a91.webp" alt="Jeans" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$10.30 - Jeans blue color shorts for men</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://cdn1.ozone.ru/s3/multimedia-1-r/c600/7234039179.jpg" alt="Coat" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$12.50 - Brown winter coat medium size</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/DF/CC/4400645e-23de-4a93-883f-bc56048b367f.jpg" alt="Wallet" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$34.00 - Jeans bag for travel for men</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://storage.ebaymag.com/uploads/b71b9c7a-59f9-4bae-af31-48bba97422d7.JPG" alt="Leather Wallet" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$99.00 - Leather wallet</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://www.ipshamburg.de/media/b2/5d/0e/1685002139/canon_eos_r100rfs_1845_mm_is_stm_sw_kame_39499.jpg" alt="Canon Camera" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$9.99 - Canon camera black, 20x zoom</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://images-cdn.ubuy.com.sa/658aef53cbb272591545a461-runmus-gaming-headset-with-noise.jpg" alt="Headset" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$39.99 - Headset for gaming with mic</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://api2.zoomit.ir/media/67040b474c0fb3af9fad770a" alt="Smartwatch" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$10.30 - Smartwatch silver color modern</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41-8RmLK95L.jpg" alt="Blue Wallet" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$10.30 - Blue wallet for men leather material</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="https://img.ltwebstatic.com/images3_pi/2022/07/14/16577995968773b13e56affd5f06e01abbaa22826e_thumbnail_750x.jpg" alt="Jeans Bag" className="w-full h-48 object-cover" />
            <p className="text-sm mt-2">$10.80 - Jeans bag for travel for men</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductsGrid4;
"use client";

import React, { useMemo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, CardContent } from "@/components/ui/card";

const GoogleMaps = () => {
  const center = useMemo(
    () => ({
      lat: -1.323334,
      lng: 36.716172,
    }),
    []
  );

  const containerStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
    }),
    []
  );

  return (
    <section className="py-16 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-spice-900 mb-4">
            Find Us
          </h2>
          <p className="text-lg text-spice-600">
            Located in the heart of Karen, easily accessible and with ample
            parking
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border border-warm-200 p-0 overflow-hidden">
            <CardContent className="p-0 h-96">
              <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [], // you can add custom styles here
                  }}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;

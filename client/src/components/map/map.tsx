import { JSX, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OfferLocation } from "../../types/offer";

type MapProps = {
  city: OfferLocation;
  points: Array<{
    id: string;
    location: OfferLocation;
    title: string;
  }>;
  selectedPoint?: string | null;
  className?: string;
};

function Map({ city, points, selectedPoint, className = "cities__map" }: MapProps): JSX.Element {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [city.latitude, city.longitude],
        zoom: city.zoom,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(mapRef.current);
    }

    if (mapRef.current) {
      mapRef.current.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [city]);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    markersRef.current.forEach((marker) => {
      marker.remove();
    });
    markersRef.current = [];

    const defaultIcon = L.icon({
      iconUrl: "img/pin.svg",
      iconSize: [27, 39],
      iconAnchor: [13.5, 39],
    });

    const activeIcon = L.icon({
      iconUrl: "img/pin-active.svg",
      iconSize: [27, 39],
      iconAnchor: [13.5, 39],
    });

    if (mapRef.current) {
      points.forEach((point) => {
        const isActive = selectedPoint === point.id;
        const marker = L.marker([point.location.latitude, point.location.longitude], {
          icon: isActive ? activeIcon : defaultIcon,
        });

        marker.addTo(mapRef.current!);
        marker.bindPopup(point.title);
        markersRef.current.push(marker);
      });
    }
  }, [points, selectedPoint]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <section ref={mapContainerRef} className={className} style={{ height: "100%" }}></section>;
}

export { Map };


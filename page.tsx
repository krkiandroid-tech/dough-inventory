"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function DoughInventoryApp() {
  const [inventory] = useState({
    total: 108,
    ready: 84,
    mature: 24,
    risk: 0,
  });

  const trays = [
    { id: "T01", batch: "B-22A", age: 52, status: "READY", balls: 12 },
    { id: "T02", batch: "B-22A", age: 52, status: "READY", balls: 12 },
    { id: "T03", batch: "B-21B", age: 68, status: "MATURE", balls: 12 },
    { id: "T04", batch: "B-21C", age: 78, status: "RISK", balls: 12 },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case "READY":
        return "bg-green-600";
      case "MATURE":
        return "bg-yellow-500";
      case "RISK":
        return "bg-red-600";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-3">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">DOUGH CONTROL</h1>
        <p className="text-sm text-gray-400">
          iPad Kitchen Mode • 09:00–16:00 Service
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <p className="text-xs text-gray-400">TOTAL</p>
            <p className="text-4xl font-bold">{inventory.total}</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <p className="text-xs text-gray-400">READY</p>
            <p className="text-4xl font-bold text-green-400">
              {inventory.ready}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <p className="text-xs text-gray-400">MATURE</p>
            <p className="text-4xl font-bold text-yellow-400">
              {inventory.mature}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <p className="text-xs text-gray-400">RISK</p>
            <p className="text-4xl font-bold text-red-400">{inventory.risk}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2 mb-4">
        <Button className="flex-1 py-6 text-lg bg-green-600 hover:bg-green-700">
          MOVE TO CELL
        </Button>
        <Button className="flex-1 py-6 text-lg bg-blue-600 hover:bg-blue-700">
          AUTO LOAD
        </Button>
      </div>

      <Tabs defaultValue="coldroom">
        <TabsList className="grid grid-cols-3 w-full h-14">
          <TabsTrigger value="coldroom">COLD</TabsTrigger>
          <TabsTrigger value="cell">CELL</TabsTrigger>
          <TabsTrigger value="prep">PREP</TabsTrigger>
        </TabsList>

        <TabsContent value="coldroom" className="mt-4">
          <div className="space-y-2">
            {trays
              .filter((t) => t.status === "READY")
              .map((tray) => (
                <Card key={tray.id} className="bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">{tray.id}</p>
                        <p className="text-sm text-gray-400">
                          Batch: {tray.batch} • Age: {tray.age}h
                        </p>
                      </div>
                      <Badge className={statusColor(tray.status)}>
                        {tray.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cell" className="mt-4">
          <div className="space-y-2">
            {trays
              .filter((t) => t.status === "MATURE")
              .map((tray) => (
                <Card key={tray.id} className="bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">{tray.id}</p>
                        <p className="text-sm text-gray-400">
                          Batch: {tray.batch} • Age: {tray.age}h
                        </p>
                      </div>
                      <Badge className={statusColor(tray.status)}>
                        {tray.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="prep" className="mt-4">
          <div className="space-y-2">
            {trays
              .filter((t) => t.status === "RISK")
              .map((tray) => (
                <Card key={tray.id} className="bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">{tray.id}</p>
                        <p className="text-sm text-gray-400">
                          Batch: {tray.batch} • Age: {tray.age}h
                        </p>
                      </div>
                      <Badge className={statusColor(tray.status)}>
                        {tray.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

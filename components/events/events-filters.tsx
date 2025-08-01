"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Search, Filter, ArrowUpDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function EventsFilters() {
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Concerts", "Festivals", "Workshops"];

  return (
    <div className="mb-12 space-y-6 animate-fade-in animation-delay-450">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events, artists..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Categories */}
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex md:inline-flex h-auto p-1">
          {categories.map((category) => (
            <TabsTrigger 
              key={category}
              value={category}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-full md:w-auto justify-start">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-full md:w-auto justify-start">
              <Filter className="mr-2 h-4 w-4" />
              <span>More filters</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4" align="start">
            <div className="space-y-2">
              <h4 className="font-medium mb-2">Venue</h4>
              <div className="space-y-1">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Main Hall</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Club</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Floor</span>
                </label>
              </div>
              
              <h4 className="font-medium mb-2 mt-4">Price</h4>
              <div className="space-y-1">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>€0 - €50</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>€50 - €100</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>€100+</span>
                </label>
              </div>
              
              <Button className="w-full mt-4">Apply Filters</Button>
            </div>
          </PopoverContent>
        </Popover>
        
        <Button variant="outline" size="sm" className="w-full md:w-auto justify-start md:ml-auto">
          <ArrowUpDown className="mr-2 h-4 w-4" />
          <span>Sort by: Date</span>
        </Button>
      </div>
    </div>
  );
}
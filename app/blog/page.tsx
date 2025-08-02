"use client";

import { useState, useMemo } from "react";
import { blogPosts } from "@/lib/data";
import BlogCard from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map(post => post.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filter by search query
    if (searchQuery) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 mt-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4">BLOG</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Stories
            </h1>
            <p className="text-xl text-white/80">
              Stay up to date with the latest happenings at Rockhal, artist interviews, 
              event reviews, and behind-the-scenes content
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.id}`}>
                    Read Full Story
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="sticky top-20 bg-background/95 backdrop-blur-md border-b z-40">
        <div className="container px-4 mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "all" ? "All Categories" : cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
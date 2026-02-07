"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image, Trash2, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BrandingPage() {
    const [logo, setLogo] = useState<string | null>(null);
    const [siteName, setSiteName] = useState("Software Lab");
    const [primaryColor, setPrimaryColor] = useState("#7C3AED");
    const [isUploading, setIsUploading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsUploading(true);
            // Simulate upload delay
            setTimeout(() => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setLogo(reader.result as string);
                    setIsUploading(false);
                };
                reader.readAsDataURL(file);
            }, 500);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate save delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleRemoveLogo = () => {
        setLogo(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Branding</h1>
                <p className="text-sm text-muted-foreground mt-1">Customize your site's logo, name, and appearance.</p>
            </div>

            {/* Logo Upload Section */}
            <Card className="rounded-2xl border-border bg-white shadow-sm">
                <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Image size={18} />
                        </div>
                        Site Logo
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-start gap-8">
                        {/* Logo Preview */}
                        <div className="flex flex-col items-center gap-4">
                            <div className={cn(
                                "w-32 h-32 rounded-2xl border-2 border-dashed flex items-center justify-center transition-all overflow-hidden",
                                logo ? "border-transparent bg-gray-50" : "border-gray-200 bg-gray-50/50"
                            )}>
                                {isUploading ? (
                                    <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                                ) : logo ? (
                                    <img src={logo} alt="Site Logo" className="w-full h-full object-contain p-2" />
                                ) : (
                                    <div className="text-center">
                                        <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                                        <span className="text-xs text-gray-400">No logo</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Preview</p>
                        </div>

                        {/* Upload Controls */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Upload a new logo</p>
                                <p className="text-xs text-gray-400 mb-4">Recommended size: 512x512px. Supported formats: PNG, JPG, SVG</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoUpload}
                                    className="hidden"
                                    id="logo-upload"
                                />
                                <Button
                                    variant="outline"
                                    className="rounded-xl"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={isUploading}
                                >
                                    <Upload size={16} className="mr-2" />
                                    {isUploading ? "Uploading..." : "Upload Logo"}
                                </Button>
                                {logo && (
                                    <Button
                                        variant="ghost"
                                        className="rounded-xl text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                                        onClick={handleRemoveLogo}
                                    >
                                        <Trash2 size={16} className="mr-2" />
                                        Remove
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Site Name Section */}
            <Card className="rounded-2xl border-border bg-white shadow-sm">
                <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold">Site Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="site-name" className="text-sm font-medium">Site Name</Label>
                            <Input
                                id="site-name"
                                value={siteName}
                                onChange={(e) => setSiteName(e.target.value)}
                                className="rounded-xl"
                                placeholder="Enter site name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="primary-color" className="text-sm font-medium">Primary Color</Label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    id="primary-color"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer"
                                />
                                <Input
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="rounded-xl flex-1"
                                    placeholder="#7C3AED"
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={cn(
                        "rounded-xl px-8 transition-all",
                        saved && "bg-emerald-500 hover:bg-emerald-600"
                    )}
                >
                    {isSaving ? (
                        <>
                            <Loader2 size={16} className="mr-2 animate-spin" />
                            Saving...
                        </>
                    ) : saved ? (
                        <>
                            <Check size={16} className="mr-2" />
                            Saved!
                        </>
                    ) : (
                        "Save Changes"
                    )}
                </Button>
            </div>
        </div>
    );
}

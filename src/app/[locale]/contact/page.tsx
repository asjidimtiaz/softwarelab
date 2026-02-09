import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Mail, MessageSquare, ShieldCheck, ArrowRight, Github } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const isRtl = locale === 'ar' || locale === 'ur';

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-midnight-950" dir={isRtl ? 'rtl' : 'ltr'}>
            <Navbar dict={dict} locale={locale} />
            <main className="flex-1 pt-32 pb-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <AnimatedSection direction="right" className="space-y-12">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest mb-6">
                                    Secure Channel
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-gray-900 dark:text-white">
                                    Initiate <br />
                                    <span className="text-electric">Transmission</span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-lg leading-relaxed">
                                    Have a complex logic challenge? Our engineering lead is available for technical consultations.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-midnight-900 rounded-3xl border border-gray-100 dark:border-midnight-800 transition-all hover:border-electric/30">
                                    <div className="w-12 h-12 rounded-2xl bg-electric/10 flex items-center justify-center text-electric">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Protocol</p>
                                        <p className="font-bold text-gray-900 dark:text-white">connect@digiwebcrew.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-midnight-900 rounded-3xl border border-gray-100 dark:border-midnight-800 transition-all hover:border-electric/30">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center text-white dark:text-gray-900">
                                        <Github size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Code Review</p>
                                        <p className="font-bold text-gray-900 dark:text-white">github.com/toqeer74</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                                    <p className="text-sm font-medium text-emerald-900 dark:text-emerald-400">
                                        <strong>Encryption Active</strong>: All project brief data is transmitted via secure channels and handled under strict laboratory confidentiality.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left">
                            <div className="p-10 md:p-12 rounded-[3rem] bg-gray-50 dark:bg-midnight-900 border border-gray-100 dark:border-midnight-800 shadow-2xl">
                                <form className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2">Operator Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name..."
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-midnight-850 border border-gray-200 dark:border-midnight-700 focus:outline-none focus:border-electric text-gray-900 dark:text-white font-medium transition-all"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2">Secure Channel (Email)</label>
                                        <input
                                            type="email"
                                            placeholder="operator@company.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-midnight-850 border border-gray-200 dark:border-midnight-700 focus:outline-none focus:border-electric text-gray-900 dark:text-white font-medium transition-all"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2">Laboratory Brief</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Describe the technical requirements or business objectives..."
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-midnight-850 border border-gray-200 dark:border-midnight-700 focus:outline-none focus:border-electric text-gray-900 dark:text-white font-medium transition-all resize-none"
                                        />
                                    </div>

                                    <button className="w-full py-5 rounded-2xl bg-electric text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 group">
                                        Initiate Transmission
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </main>
            <Footer dict={dict} locale={locale} />
        </div>
    );
}

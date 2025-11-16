// Supabase Configuration
// รองรับทั้งการใช้งานแบบ local และ deployment บน Render
// สำหรับ Render: ตั้งค่า Environment Variables ใน Render Dashboard
// - SUPABASE_URL
// - SUPABASE_ANON_KEY

const SUPABASE_CONFIG = {
    // ใช้ environment variables ถ้ามี (สำหรับ Render) หรือใช้ค่าจาก config
    url: window.SUPABASE_URL || 'https://nvvqqemmphmyicncvust.supabase.co',
    anonKey: window.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dnFxZW1tcGhteWljbmN2dXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMTk1OTksImV4cCI6MjA3ODc5NTU5OX0.Gq4uBYrQh3oyOFRPNCWtBClJy-qNB4p3NPkwkyEtcx4'
};

// ตรวจสอบว่ามีการตั้งค่า Supabase หรือไม่
if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
    console.error('❌ Supabase configuration is missing!');
    throw new Error('Supabase configuration is required. Please set SUPABASE_URL and SUPABASE_ANON_KEY.');
}

console.log('✅ Supabase configuration loaded');


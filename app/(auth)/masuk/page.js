
import OauthLoginButton from '@/components/auth/masuk/OauthLogin';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

export default function SignUpPage() {





    return (
        <div className="h-screen w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center items-center min-h-screen">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-2xl font-semibold">Selamat datang</h1>
                    <p className="text-gray-600">
                        Belum punya akun?{' '}
                        <a href="#" className="text-rose-600 hover:underline">Daftar</a>
                    </p>

                    {/* Sign-up with Google Button */}
                    <OauthLoginButton />

                    {/* Divider with "atau" */}
                    <div className="flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-600">atau</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Sign-up Form */}
                    <form className="space-y-4">
                        <Input placeholder="Email" className="w-full" />
                        <Button className="w-full bg-rose-600 text-white hover:bg-rose-700">Masuk</Button>
                    </form>

                    <p className="text-sm text-gray-600 mt-4">
                        Dengan mendaftar, saya menyetujui{' '}
                        <a href="#" className="text-rose-600 hover:underline">Syarat & Ketentuan</a>{' '}
                        serta{' '}
                        <a href="#" className="text-rose-600 hover:underline">Kebijakan Privasi</a> Kitapanen.
                    </p>
                </div>
            </div>

            {/* Right side with image */}
            <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
                <img src="/FE/img01.jpg" alt="Background Image" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function SignUpPage() {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center items-center min-h-screen">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-2xl font-semibold">Daftar sekarang</h1>
                    <p className="text-gray-600">
                        Sudah punya akun?{' '}
                        <a href="#" className="text-rose-600 hover:underline">Login</a>
                    </p>

                    {/* Sign-up with Google Button */}
                    <Button variant="outline" className="w-full flex items-center justify-center space-x-2  border-rose-600 hover:bg-rose-100">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <span>Daftar Dengan Google</span>
                    </Button>

                    {/* Divider with "atau" */}
                    <div className="flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-600">atau</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Sign-up Form */}
                    <form className="space-y-4">
                        <Input placeholder="Email" className="w-full" />
                        <Button className="w-full bg-rose-600 text-white hover:bg-rose-700">Daftar</Button>
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
                <Image width={400} height={400} src="/FE/img01.jpg" alt="Background Image" className=" w-full h-full object-cover" />
            </div>
        </div>
    );
}

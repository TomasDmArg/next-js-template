import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com'],
    },
};
export default MillionLint.next({
    rsc: true,
    turbo: true,
})(nextConfig);

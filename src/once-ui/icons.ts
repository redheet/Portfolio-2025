import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiEnvelope,
	HiCalendarDays
} from "react-icons/hi2";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter,
	FaSquareWhatsapp,
	FaNodeJs,
	FaYarn,
	FaLinux,
	FaApple,
	FaWindows,
	FaGitlab,
	FaCloudflare,
	FaSass,
} from "react-icons/fa6";

import { 
	IoLogoJavascript, 
	IoLogoFirebase,
	IoLogoVercel,
} from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	gallery: PiImageDuotone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	whatsapp: FaSquareWhatsapp,
	js: IoLogoJavascript,
	nextjs: RiNextjsLine,
	nodejs: FaNodeJs,
	yarn: FaYarn,
	linux: FaLinux,
	macbook: FaApple,
	windows: FaWindows,
	gitlab: FaGitlab,
	cloudflare: FaCloudflare,
	firebase: IoLogoFirebase,
	sass: FaSass,
	vercel: IoLogoVercel,
	heroku: GrHeroku,
};
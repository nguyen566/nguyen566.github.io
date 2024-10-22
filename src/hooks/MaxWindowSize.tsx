import React, { useEffect, useState } from "react";

const useMaxWindowSize = () => {
	const [maxScroll, setMaxScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const clientHeight = document.documentElement.clientHeight;
			const maxScrollValue = scrollHeight - clientHeight;
			setMaxScroll(maxScrollValue);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return maxScroll;
};

export default useMaxWindowSize;

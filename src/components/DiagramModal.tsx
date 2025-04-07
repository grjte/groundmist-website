import { useState, useEffect, useRef } from 'react';

interface DiagramModalProps {
    isOpen: boolean;
    onClose: () => void;
    imagePath: string;
    title: string;
}

export function DiagramModal({ isOpen, onClose, imagePath, title }: DiagramModalProps) {
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Reset position and scale when modal opens
    useEffect(() => {
        if (isOpen) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    }, [isOpen]);

    // Center the image when it loads
    const handleImageLoad = () => {
        if (containerRef.current && imageRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const imageRect = imageRef.current.getBoundingClientRect();

            setPosition({
                x: (containerRect.width - imageRect.width) / 2,
                y: (containerRect.height - imageRect.height) / 2
            });
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = -e.deltaY;
        const scaleChange = delta > 0 ? 0.1 : -0.1;
        const newScale = Math.max(0.5, Math.min(3, scale + scaleChange));

        if (containerRef.current && imageRef.current) {
            // Get mouse position relative to container
            const containerRect = containerRef.current.getBoundingClientRect();
            const mouseX = e.clientX - containerRect.left - position.x;
            const mouseY = e.clientY - containerRect.top - position.y;

            // Calculate new position to zoom towards mouse cursor
            const scaleRatio = newScale / scale;
            const newX = position.x - (mouseX * (scaleRatio - 1));
            const newY = position.y - (mouseY * (scaleRatio - 1));

            setScale(newScale);
            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleReset = () => {
        setScale(1);
        if (containerRef.current && imageRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const imageRect = imageRef.current.getBoundingClientRect();

            setPosition({
                x: (containerRect.width - imageRect.width) / 2,
                y: (containerRect.height - imageRect.height) / 2
            });
        }
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-white bg-opacity-90 backdrop-blur-sm">
            <div
                className="absolute inset-0 flex items-center justify-center p-4"
                onClick={handleBackgroundClick}
            >
                <div ref={modalContentRef} className="relative max-w-6xl w-full bg-white rounded-lg shadow-2xl">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    title="Zoom out"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                </button>
                                <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
                                <button
                                    onClick={() => setScale(s => Math.min(3, s + 0.1))}
                                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    title="Zoom in"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                                    title="Reset zoom"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                                title="Close"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={containerRef}
                        className="relative overflow-hidden p-4 bg-gray-50"
                        style={{ height: 'calc(100vh - 200px)' }}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <div
                            className="transform origin-center transition-transform duration-100"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                cursor: isDragging ? 'grabbing' : 'grab'
                            }}
                        >
                            <img
                                ref={imageRef}
                                src={imagePath}
                                alt={title}
                                className="max-w-none"
                                style={{
                                    maxHeight: 'calc(100vh - 232px)',
                                    objectFit: 'contain'
                                }}
                                onLoad={handleImageLoad}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
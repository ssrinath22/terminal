import { useEffect, useState } from "react";

const BOOBOOBOO = () => {
    const [step, setStep] = useState(0)
    const transition = 'height 1s, width 1s, border-radius .6s, transform 1s, background-color 1s, backdrop-filter 1s, opacity .4s'
    const [stepBtnHovered, setStepBtnHovered] = useState(false)

    const handleScroll = () => {

        const currY = window.scrollY
        const maxY = document.body.scrollHeight - window.innerHeight

        setStep(Math.floor((currY / maxY) * 5))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [step])

    return (
        <div
            style={{
                display: 'grid',
                flexDirection: 'row',
                height: '100vh',
                width: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1f1f1f',
                overflow: 'hidden',
                position: 'fixed',
            }}
        >
            <div
                onMouseEnter={() => setStepBtnHovered(true)}
                onMouseLeave={() => setStepBtnHovered(false)}
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 25,
                    right: 25,
                    padding: '5px 20px',
                    // width: '150px',
                    // height: '50px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    color: '#1f1f1f',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    fontSize: '2rem',
                }}
            >
                <span style={{ opacity: stepBtnHovered ? 0 : 1, transition: transition }}>Step:</span>
                <span style={{ opacity: stepBtnHovered ? 1 : 0, transition: transition }}>{step}</span>

            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '10%',
                    color: '#ffffff',
                    fontSize: '8rem',
                    fontFamily: 'monospace',
                }}
            >
                THIS IS SAMPLE TEXT
            </div>
            <div
                style={{
                    display: 'grid',
                    flexDirection: 'row',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            borderRadius: (step === 0) ? '0 0' : (step == 1) ? '0 0 0 100%' : (step === 2) ? '0 100%' : (step === 4) ? '100%' : '0 0 ',
                            height: (step == 3) ? '50px' : (step === 4) ? '25px' : '300px',
                            width: (step === 4) ? '25px' : '300px',
                            transform: (step === 5) ? 'translateX(-1000px) rotate(90deg)' : 'rotate(90deg)',
                            transition: transition,
                            backgroundColor: ' #ffffff50',
                            backdropFilter: 'blur(10px)',
                        }}
                    />

                    <div

                        style={{
                            borderRadius: (step === 0) ? '0 0' : (step === 1) ? '0 0 100% 0' : (step === 2) ? '100% 0' : (step === 4) ? '100%' : '0 0 ',
                            height: (step === 3) ? '50px' : (step === 4) ? '25px' : '300px',
                            width: (step === 4) ? '25px' : '300px',
                            transform: (step === 5) ? 'translateX(1000px) rotate(-90deg)' : 'rotate(-90deg)',
                            transition: transition,
                            backgroundColor: ' #ffffff50',
                            backdropFilter: 'blur(10px)',
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '100%',
                        width: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        alignItems: 'start',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            borderRadius: (step === 0) ? '0 0' : (step === 1) ? '0 0 0 100%' : '0 100%',
                            height: (step >= 3) ? '0px' : '300px',
                            width: '300px',
                            transition: transition,
                            backgroundColor: ' #ffffff50',
                            backdropFilter: 'blur(10px)',
                        }}
                    />

                    <div
                        style={{
                            borderRadius: (step === 0) ? '0 0' : (step === 1) ? '0 0 100% 0' : '100% 0',
                            height: (step >= 3) ? '0px' : '300px',
                            width: '300px',
                            transition: transition,
                            backgroundColor: ' #ffffff50',
                            backdropFilter: 'blur(10px)',
                        }}
                    />
                </div>
            </div>
        </div>

    )
}


const TestArea = () => {
    return (
        <div
            style={{
                scrollbarColor: 'transparent',
            }}
        >
            <BOOBOOBOO />
            <div
                style={{
                    height: '400vh',
                }}
            />
        </div>
    )
}
export default TestArea
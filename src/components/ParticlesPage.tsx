import Particles from 'react-tsparticles';

interface Props {
  particlesInit: any;
  particlesLoaded: any;
}

export const ParticlesPage = (props: Props) => {
  return (
    <div>
        <Particles className="particles"
      id="tsparticles"
      init={props.particlesInit}
      loaded={props.particlesLoaded}
      options={{
        background: {
          color: {
            value: "#3d404b",
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#7ef4dc",
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 50,
          },
          opacity: {
            value: .2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false,
      }}
    />
    </div>
  )
}
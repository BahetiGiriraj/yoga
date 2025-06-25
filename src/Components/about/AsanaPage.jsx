import LeftAsana from "./LeftAsana";
import RightAsana from "./RightAsana";
import Logo from "../../assets/Logo.JPG";

function AsanaPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-16">Asanas</h1>

      <RightAsana
        imageURL={Logo}
        asanaName="Utthita Hasta Padangusthasana"
        description="Improves balance, strengthens legs, and stretches hamstrings. It enhances focus and core stability. Great for building awareness in standing postures and improving hip mobility."
      />

      <LeftAsana
        imageURL={Logo}
        asanaName="Eka Pada Koundinyasana II"
        description="An advanced arm balance that strengthens arms, wrists, and core. Improves balance, coordination, and flexibility in hamstrings and hips. Requires focus and full-body engagement."
      />

      <RightAsana
        imageURL={Logo}
        asanaName="Gomukhasana"
        description="A seated pose that stretches shoulders, triceps, hips, and thighs. Improves posture, reduces shoulder stiffness, and calms the mind. Often used in meditative practices."
      />

      <LeftAsana
        imageURL={Logo}
        asanaName="Parivrtta Utkatasana"
        description="A twisting squat that stimulates digestion, strengthens legs and glutes, and detoxifies through spinal twist. Builds stamina and enhances flexibility in the spine and shoulders."
      />
    </div>
  );
}

export default AsanaPage;

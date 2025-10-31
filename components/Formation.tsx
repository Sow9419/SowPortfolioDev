import { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, Trophy, BookOpen, Zap } from 'lucide-react';

const formations = [
  {
    periode: "2025 à nos jours",
    etablissement: "Université ENSET Mohammedia",
    diplome: "Master Ingénierie informatique, Big Data et Cloud Computing",
    statut: "En cours",
    lieu: "Mohammedia, Maroc",
    color: "blue",
    gradient: "from-blue-600 via-cyan-600 to-blue-600",
    icon: GraduationCap,
    specialites: ["Big Data", "Cloud Computing", "IA"],
    progress: 60
  },
  {
    periode: "2020-2023",
    etablissement: "Institut Privé Smart (IPSMART)",
    diplome: "Licence en génie logiciel",
    statut: "Obtenu",
    lieu: "Mali",
    color: "purple",
    gradient: "from-purple-600 via-fuchsia-600 to-purple-600",
    icon: BookOpen,
    specialites: ["Développement", "Architecture", "Méthodes Agiles"],
    progress: 100
  },
  {
    periode: "2020-2023",
    etablissement: "Faculté des Sciences et Techniques de Bamako",
    diplome: "Licence en Réseaux et Télécommunications",
    statut: "Obtenu",
    lieu: "Bamako, Mali",
    color: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-emerald-600",
    icon: Zap,
    specialites: ["Réseaux", "Télécommunications", "Sécurité"],
    progress: 100
  },
  {
    periode: "2016-2019",
    etablissement: "Lycée Massa Makan Diabaté",
    diplome: "Baccalauréat (Terminale Sciences Exactes)",
    statut: "Obtenu",
    lieu: "Mali",
    color: "amber",
    gradient: "from-amber-600 via-orange-600 to-amber-600",
    icon: Trophy,
    specialites: ["Mathématiques", "Physique", "Sciences"],
    progress: 100
  }
];

export default function Formation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const colorStyles: { [key: string]: { border: string; shadow: string; text: string; bg: string; } } = {
    blue: {
      border: 'border-blue-600 dark:border-blue-400',
      shadow: 'shadow-blue-500/30 dark:shadow-blue-400/20',
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-400',
    },
    purple: {
      border: 'border-purple-600 dark:border-purple-400',
      shadow: 'shadow-purple-500/30 dark:shadow-purple-400/20',
      text: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-400',
    },
    emerald: {
      border: 'border-emerald-600 dark:border-emerald-400',
      shadow: 'shadow-emerald-500/30 dark:shadow-emerald-400/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-400',
    },
    amber: {
      border: 'border-amber-600 dark:border-amber-400',
      shadow: 'shadow-amber-500/30 dark:shadow-amber-400/20',
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-400',
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Ultra Moderne */}
        <div className="text-center mb-6 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-200 dark:border-slate-700 shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Parcours Académique</span>
            </div>
          </div>
        </div>

        {/* Timeline Ultra Moderne */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-orange-600 dark:from-blue-400 dark:via-purple-400 dark:to-orange-400 rounded-full opacity-30">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600 to-transparent dark:from-blue-400 animate-pulse"></div>
          </div>

          {/* Formation Cards */}
          <div className="space-y-16">
            {formations.map((formation, index) => {
              const Icon = formation.icon;
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const isSelected = selectedIndex === index;
              const styles = colorStyles[formation.color];

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Node - Ultra Moderne */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 items-center justify-center z-20">
                    <div className={`relative w-full h-full transition-all duration-700 ${
                      isHovered ? 'scale-125 rotate-180' : 'scale-100 rotate-0'
                    }`}>
                      {/* Outer Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${formation.gradient} opacity-20 animate-pulse`}></div>
                      
                      {/* Middle Ring */}
                      <div className={`absolute inset-2 rounded-full bg-white dark:bg-slate-900 border-4 ${styles.border} transition-all duration-500`}></div>
                      
                      {/* Inner Icon */}
                      <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${formation.gradient} flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Animated Rings */}
                      {isHovered && (
                        <>
                          <div className={`absolute inset-0 rounded-full border-2 ${styles.border} animate-ping`}></div>
                          <div className={`absolute inset-0 rounded-full border ${styles.border} animate-pulse`}></div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="w-full lg:w-[45%]">
                    <div
                      onClick={() => setSelectedIndex(isSelected ? null : index)}
                      className={`group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border-2 cursor-pointer overflow-hidden transition-all duration-700 ${
                        isHovered || isSelected
                          ? `${styles.border} shadow-2xl ${styles.shadow}`
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg'
                      }`}
                    >
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${formation.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-700`}></div>
                      
                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 ${styles.bg} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                            style={{
                              left: `${20 + i * 15}%`,
                              bottom: '-10px',
                              animation: isHovered ? `float ${2 + i * 0.5}s ease-in-out infinite` : 'none',
                              animationDelay: `${i * 0.2}s`
                            }}
                          ></div>
                        ))}
                      </div>

                      <div className="relative z-10">
                        {/* Header avec Badge */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${formation.gradient} shadow-lg transform transition-all duration-300 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}>
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="text-sm font-bold text-white">
                              {formation.periode}
                            </span>
                          </div>
                          
                          <div className={`relative px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl transition-all duration-300 ${
                            formation.statut === 'En cours'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-700'
                              : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-300 dark:border-emerald-700'
                          }`}>
                            {formation.statut === 'En cours' && (
                              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                              </span>
                            )}
                            {formation.statut}
                          </div>
                        </div>

                        {/* Établissement */}
                        <h3 className={`text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight transition-all duration-300 ${
                          isHovered ? `text-transparent bg-gradient-to-r ${formation.gradient} bg-clip-text` : ''
                        }`}>
                          {formation.etablissement}
                        </h3>

                        {/* Diplôme */}
                        <div className="flex items-start gap-3 mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                          <Award className={`w-6 h-6 ${styles.text} flex-shrink-0 mt-0.5`} />
                          <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                            {formation.diplome}
                          </p>
                        </div>

                        {/* Spécialités - Nouveau */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {formation.specialites.map((spec, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${formation.gradient} text-white shadow-md transform transition-all duration-300 hover:scale-110`}
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Progress Bar - Nouveau */}
                        {formation.statut === 'En cours' && (
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Progression</span>
                              <span className={`text-xs font-bold ${styles.text}`}>{formation.progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${formation.gradient} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: isHovered ? `${formation.progress}%` : '0%' }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {/* Localisation */}
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{formation.lieu}</span>
                        </div>
                      </div>

                      {/* Decorative Corner Elements */}
                      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${formation.gradient} opacity-5 dark:opacity-10 rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-1000`}></div>
                      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${formation.gradient} opacity-5 dark:opacity-10 rounded-tr-full transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-1000`}></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section Ultra Moderne */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: '4+', label: 'Diplômes', gradient: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400', icon: Award },
            { value: '9+', label: "Années d'études", gradient: 'from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400', icon: BookOpen },
            { value: '3', label: 'Institutions', gradient: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400', icon: GraduationCap },
            { value: '60%', label: 'Master en cours', gradient: 'from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400', icon: Sparkles }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border-2 border-slate-200 dark:border-slate-800 text-center transform hover:scale-110 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    <StatIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-semibold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
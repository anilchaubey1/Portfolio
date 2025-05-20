const data = {
  papers: [
    { description: `1. Krishna, K.S. and Chaubey, A.K., 1987. Double Off-End configuration in
seismic reflection surveys. J. Assoc. Expl. Geophys., 8:35-40.` },
    { description: `2. Gopala Rao, D., Bhattacharya, G.C, Subba Raju, L.V., Ramana, M.V.,
Subrahmanyam, V., Kamesh Raju, K.A., Ramprasad, T. and Chaubey
A.K., 1987. Regional marine geophysical studies of the southwestern
continental margin of India. In: T.S.S. Rao et al. (Editors), Contributions
in Marine Sciences, National Institute of Oceanography, Goa, 427-437.` },
    { description: `3. Chauhan, O.S. and Chaubey, A.K., 1989. Comparative studies of
hydrographic, gravity and magnetic anomalies in and around
Ennore-Kolkata Lower Continental Slope. Indian J. Mar. Sci., 18:142-149.` },
    { description: `4. Chaubey, A.K., Krishna, K.S., Subba Raju, L.V. and Gopala Rao, D.,
1990. Magnetic anomalies across the southern Central Indian Ridge:
Evidence for a new transform fault. Deep-Sea Res., 37:647-656.` },
    { description: `5. Subba Raju, L.V., Krishna, K.S. and Chaubey, A.K., 1991. Buried Late
Tertiary/Cretaceous oceanic crust off the northern Krishna Godavari Basin,
east coast of India. Geophys. J. Int., 106:661-670.` },
    { description: `6. Gopala Rao, D., Chaubey, A. K. and Ramprasad, T., 1992. The
Andaman Sea seafloor experiment - long range propagation of explosions,
Mar. Geophys. Res., 14:77-86.` },
    { description: `7. Chaubey, A.K., Ramana, M.V., Sarma, K.V.L.N.S., Krishna, K.S., Murty,
G.P.S., Mittal, G.S. and Drolia, R.K., 1992. Marine magnetic studies in the northern Bay of Bengal, preliminary results. In:
B.N. Desai (Editor), Oceanology of the Indian Ocean, Oxford-IBH, New
Delhi, pp 519-525.` },
    { description: `8. Bhattacharya, G.C., Chaubey, A.K., Murty, G.P.S., Gopala Rao, D.,
Subrahmanyam, V., Ramana, M.V. and Hegde, R., 1992. Rock magnetic
studies of ocean-floor sediments of the Bay of Bengal and Andaman Sea:
Their tectonic significance. Tectonophysics, 208:305-322.` },
    { description: `9. Chauhan, O.S. and Chaubey, A.K., 1992. Submarine physiography off the
Saurashtra (India) coast and implications for port development. Geo-Mar.
Lett., 12:133-140.` },
    { description: `10. Ramana, M.V., Subrahmanyam, V., Krishna, K.S., Chaubey, A.K., Sarma,
K.V.L.N.S., Murty, G.P.S., Mittal, G.S. and Drolia, R.K., 1992. Marine
magnetic studies in the northern Bay of Bengal, preliminary results. In:
B.N. Desai (Editor), Oceanology of the Indian Ocean, Oxford-IBH, New
Delhi, pp 519-525.` },
    { description: `11. Chaubey, A.K., Bhattacharya, G.C., Murty, G.P.S. and Desa, M., 1993.
Spreading history of the Arabian Sea: Some new constraints. Mar. Geol.,
112:343-352.` },
    { description: `12. Bhattacharya, G.C., Murty, G.P.S., Srinivas, K., Chaubey, A.K.,
1993. Magnetic anomalies across the Laxmi Basin in the western continental
margin of India. Mar. Geophys. Res., 15:257-270.` },
    { description: `13. Gopala Rao, D., Bhattacharya, G.C., Ramana, M.V., Subrahmanyam, V.,
1993. Geophysical studies of the western continental margin of India.
Tectonophysics, 228:231-245.` },
    { description: `14. Ramana, M.V., Subrahmanyam, V., Krishna, K.S., Chaubey, A.K., Sarma,
K.V.L.N.S., Gopala Rao, D., 1993. Gravity studies along a deep seismic
profile across the western continental margin of India. Tectonophysics,
228:247-258.` },
    { description: `15. Rao, G.S., Naidu, P.D., Bhargava, O.N., Chaubey, A.K., 1994.
Paleoceanography of the northeastern Arabian Sea during the Late
Quaternary with reference to upwelling and denudation on the western
continental margin of India. Paleogeogr., Palaeocl., Palaeoecol., 110:227-244.` },
    { description: `16. Saxena, S.M., Mathur, J.D., Chaubey, A.K., 1994. Magnetic studies on
the northeastern Arabian Sea sediments. Oceanol. Acta, 17:19-24.` },
    { description: `17. Saxena, S.M., Chaubey, A.K., Bhushan, R., Veerayya, M., 1994. Absolute
paleointensity of geomagnetic field from Holocene sediments of the
eastern Arabian Sea. Phys. Earth Planet. Int., 85:97-103.` },
    { description: `18. Saxena, S.M., Bhushan, R., Chaubey, A.K., Veerayya, M., 1995. Magnetic
studies of hemipelagic sediments from the western Andaman Sea. Earth
Planet. Sci. Lett., 128:125-134.` },
    { description: `19. Bhattacharya, G.C., Srinivas, K., Murthy, C.R.L., Chaubey, A.K., 1995.
Geophysical constraints on crustal evolution of continental margin off
Karnataka, west coast of India. Mar. Geol., 128:63-76.` },
    { description: `20. Bhattacharya, G.C., Chaubey, A.K., Singh, I.B., Shankar, U., 1995.
Geophysical studies of the southeastern Arabian Sea. J. Geophys. Res.,
100:8847-8854.` },
    { description: `21. Chaubey, A.K. and Saxena, S.M., 1996. Magnetic fabric studies of deep-
sea sediments. Geo-Mar. Lett., 16:172-180.` },
    { description: `22. Bhushan, R., Saxena, S.M., Chaubey, A.K., Mishra, A.K., Murthy, Y.V., 1996.
Paleomagnetic record of late Holocene reversal(s) in the Indian Ocean.
J. Geophys. Res., 101:2185-2196.` },
    { description: `23. Singh, I.B., Shankar, U., Bhattacharya, G.C., Chaubey, A.K., 1997. On
the origin of southern Bay of Bengal basin - a geophysical study. Mar.
Geophys. Res., 19:407-419.` },
    { description: `24. Sharma, R., Gopala Rao, D., Ramana, M.V., Subrahmanyam, V., 1997.
North-east Arabian Sea sedimentation and tectonics during Late
Quaternary, interpreted from deep-sea drilling data. Mar. Geol.,
140:133-145.` },
    { description: `25. Mishra, A.K., Chaubey, A.K., 1997. Morphology and magnetics of the
Laxmi Basin, west of India: evidence for two phases of crustal accretion.
Mar. Geol., 144:233-241.` },
    { description: `26. Bhattacharya, G.C., Srinivas, K., Chaubey, A.K., 1997. Structure and
tectonic evolution of the south-western continental margin of India. J.
Geol. Soc. India, 50:221-232.` },
    { description: `27. Veena, V., Srinivas, K., Srinivasulu, D., Syamala, P., Chaubey, A.K.,
1998. Geomorphic and geomagnetic studies on the Narmada, Tapti and
Narengi River Systems of central India. Phys. Chem. Earth, 23:277-281.` },
    { description: `28. Singh, I.B., Shankar, U., Chaubey, A.K., Gopala Rao, D., Srinivas, K.,
1998. The role of geodetic control in plate tectonics. Curr. Sci.,
74:937-942.` },
    { description: `29. Bhushan, R., Saxena, S.M., Chaubey, A.K., 1999. Geomagnetic paleointensity
from the Bay of Bengal sediments. Earth Planet. Sci. Lett.,
172:323-335.` },
    { description: `30. Singh, S.K., Srinivas, K., Chaubey, A.K., Tej Rao, K., Srinivasan, R.,
2001. Magnetic evidence for spreading of the Carlsberg Ridge. Curr. Sci.,
81:740-743.` },
    { description: `31. Pandey, D.K.; Chaubey, A.K.; and Rajan, C.K.; 2002. Magnetic anomalies across
Crozet Plateau and their geotectonic implications. J. Geol. Soc. India,
60:557-564.` },
    { description: `32. Mishra, A.K.; Chaubey, A.K.; 2004. Evolution of the Ninetyeast Ridge,
northeastern Indian Ocean, and its implication on the tectonics of the
Bay of Bengal region. Curr. Sci., 87:1036-1042.` },
    { description: `33. Shankar, U.; Ghatak, R.; Bhattacharya, G.C.; Chaubey, A.K.; 2006.
Tectono-magmatic evolution of the northwestern margin of the Indian
Plate. J. Geophys. Res., 111: B12102, doi:10.1029/2005JB003975.` },
    { description: `34. Galyautdinova, N.R., Chaubey, A.K., Antipin, A.V.; 2007. Petrological
investigations of basalts from the Chagos-Laccadive Ridge using
electron-probe microanalysis and Mössbauer spectroscopy. Petrology,
15:567–584.` },
    { description: `35. Shankar, U.; Chaubey, A.K.; 2007. Magnetic anomalies and crustal accretion
history of the Bay of Bengal during the Late Cretaceous-Tertiary.
Tectonics, 26:TC3017, doi:10.1029/2005TC001949.` },
    { description: `36. Chaubey, A.K.; Shankar, U.; 2007. All India Coordinated Marine
Geoengineering Program: Preface. Current Science, 93:1578-1580.` },
    { description: `37. Kotlia, B.S.; Chaubey, A.K.; Sreenivas, J.; 2009. Evidence for chemical
weathering as a trigger for volcanism in the Deccan Igneous Province,
India. Curr. Sci., 96:1336-1341.` },
    { description: `38. Kotlia, B.S.; Chaubey, A.K.; Saha, A.K.; 2009. Petrology and
geochemistry of Deccan volcanic rocks, around Pali, Sahyadri range,
Maharashtra, India. Indian J. Geochem., 24:87-101.` },
    { description: `39. Sreejith, K.M., Chaubey, A.K., Mishra, A., Kumar, S., Rajawat, A.S., 2016.
A new identification system using gravity inversion for ore,
minerals and petroleum exploration: its application to India’s mineral
systems. Geosci. Frontiers, 7:95-105.` },
    { description: `40. Mishra, A.; Chaubey, A.K.; Sreejith, K.M.; Kumar, S.; 2018. Crustal
structures beneath the Laxmi Basin and their tectonic implications:
Integration of seismic and gravity data. Geosci. Frontiers, 9:605-616.` },
    { description: `41. Dubey, K.M.; Chaubey, A.K.; Mahale, V.P.; Karisiddaiah, S.M.; 2018.
Plate reconstructions of the western Indian Ocean since Gondwana
breakup. Mar. Geophys. Res., 39:319–328.` },
    { description: `42. Dubey, K.M. and Chaubey, A.K., 2018. Origin and distribution of shallow
sediments and intrusions on the eastern Arabian Sea margin.
Mar. Geol., 405:17-31.` },
    { description: `43. Kumar P.; Mishra A.; Kumar P.V.; Kumar, S.; Dubey K.M.; Singh, D.; 2019.
Crustal evolution and geodynamics of the Arabian Sea during continental
rift and drift: evidence from seismic data. In: Recent Advances in
Geodynamics, Taylor & Francis, 99-119.` },
    { description: `44. Kumar, P.; Chaubey A.K.; 2019. Extension of flood basalt on the
Maldives Ridge: Observations and implications for plume-lithosphere
interaction. Geol. Soc. London Spec. Pub., 492: 77-86.` },
    { description: `45. Yatheesh, V.; Dyment, J.; Bhattacharya, G.C.; Royer, J.Y.; Kamesh Raju,
L.; Chaubey, A.K.; 2019. Detailed structure and plate reconstructions of
the Central Indian Ridge system: Phases of magmatism. Geophys. Res.
Lett., 46: 3498–3506, https://doi.org/10.1029/2019GL082220.` },
    { description: `46. Chanda, K., Chakraborty, B.; Vardhana, Y.V.; Graciasa, D.; Mahanty,
P.; Chakraborty, G.; Chaubey, A.K.; 2020. Seismic images across the
Bay of Bengal reveal tectonic interaction between India and Myanmar.
Sci. Rep., 10:6244, doi: 10.1038/s41598-020-62824-2.` },
    { description: `47. Jacob, J.; Pitchika, V.K.; Dubey, K.M.; Mishra, A.; Kumar, P.; Kumar,
S.; Vidya, V.; Jha, B.M.; Nautiyal, P.; Chaubey, A.K.; 2022.
Isostatic control of the oceanic crustal structure in the northern Arabian
Sea: A combined high-velocity seismic reflection and gravity modelling.
Curr. Sci., 123:928-936.` },
    { description: `48. Mishra, A.; Chaubey, A.K.; Kumar, S.; Kumar, P.V.; Kumar, P.; Dubey,
K.M.; 2022. Evidence for mantle serpentinization on the eastern Arabian
Sea margin. Geosci. Frontiers, 13:101276, doi:10.1016/j.gsf.2021.101276.` },
    { description: `49. Kumar, P. and Chaubey, A.K. 2022. Réunion plume associated flood
basalt province activity triggered by a synergism between outflux of
CO2 and eustatic sea-level fall. J. Geodyn., 153:101711.` },
    { description: `50. Dubey, K.M.; Chaubey, A.K.; Gaur, A.S. and Joglekar, M.V., 2022.
Geomorphology, paleoceanography and tectonics of the western Arabian
Sea: Insights from a seismic stratigraphy study off the Maharashtra
continental margin. Mar. Geol., 459:106848.` },
    { description: `51. Shravan Kumar, A.K.; Chaubey, A.K.; Uma Shankar; Akhil Mishra
and Jensen Jacob, 2023. Volume, mass of sediments and igneous
crustal thickness below the Arabian Basin, northwest Indian Ocean. J.
Ind. Geophys. Union, 27(2) (2023), 62-83` }
  ],
  articles: [
    { description: `1. Chaubey, A.K., 1996. Ocean research and national language Hindi -
Desirability of use of Hindi in light of CSIR vision 2001. Hindi seminar
held at Central Mining Research Institute, Nagpur on 16 September 1996.
pp. 55-61.` },
    { description: `2. Bhattacharya, G.C., A.K. Chaubey and G.P.S. Murty, 1996. Legal
continental shelf – a geophysical approach. Hindi Seminar on Samudra
Manthan, held at NIO, Goa during 12-13 September 1996, Abstract,
pp.5.` },
    { description: `3. Chaubey, A.K., 2001. Hind Mahasagar me Fransisi pandubbi Nautile ki
pratham dubbi. Samudrica, vol. 6-7, pp.16-17.` },
    { description: `4. Chaubey, A.K., 2007. Seismic Techniques. In: Industrial Offshore Surveys
- a long “H” Course, National Institute of Oceanography, Goa, pp. 217-231.` }
  ],
  abstracts: [
    { description: `1. Krishna, K.S. and Chaubey, A.K. Common Depth Point Technique,
recovery shots and CDP trace gathering-a modified approach. 11th
Annual Convention and Seminar on “Exploration Geophysics” and
International Symposium on Deep Seismic Sounding Traverses
organized by Association of Exploration Geophysicists (AEG) held at
Hyderabad, 1985, pp. A-42.` },
    { description: `2. Chaubey, A.K., Krishna, K.S., Subba Raju, L.V., Gopala Rao D. Magnetic
anomalies across southern mid Indian Ocean Ridge: Evidence for a new
transform fault. 14th Annual Convention and Seminar on “Exploration
Geophysics” organized by Association of Exploration Geophysicists
(AEG) held at Department of Geophysics, Andhra University during 17-19
November 1988, pp. A-31.` },
    { description: `3. Chaubey, A.K. and Krishna, K.S. Gravity measurements across the
Krishna-Godavari Basin (East Coast of India): An attempt to determine
crustal structure. 14th Annual Convention and Seminar on “Exploration
Geophysics” organized by AEG held at Department of Geophysics,
Andhra University during 17-19 November 1988, pp. A-32.` },
    { description: `4. Chaubey, A.K., Bhattacharya, G.C., Krishna, K.S., and Uma Shankar.
Gravity study over Krishna Basin and Godavari Basin (East Coast of
India). 15th Convention and Symposium on Exploration Geophysics (AEG)
held at Delhi University, Delhi during 12-13 November 1990, pp. A-48.` },
    { description: `5. Rao, G.S., Bhushan, R., Naidu, P.D., Srinivas, K., Krishna, K.S., Chaubey,
A.K. Preliminary results of a combined geochemical and geophysical
study in the Krishna, Godavari, and Bengal Basins (India). Second
International Conference on Paleoceanography, Tokyo, 1991, Abstract,
U-25.` },
    { description: `6. Chaubey, A.K., Krishna, K.S., Bhattacharya, G.C. and Subba Raju,
L.V. Gravity measurements between Narmada and Tapti River basins,
Central India. AEG Convention and Seminar on “Advances in Earth
Sciences - 1992” held at Panjab University, Chandigarh, 1992, Abstract,
pp. 102-103.` },
    { description: `7. Chaubey, A.K., Krishna, K.S., Bhattacharya, G.C. and Subba Raju,
L.V. Magnetic measurements between Narmada and Tapti River basins,
Central India. AEG Convention and Seminar on “Advances in Earth
Sciences - 1992” held at Panjab University, Chandigarh, 1992, Abstract,
pp. 104-105.` },
    { description: `8. Bhattacharya, G.C., Chaubey, A.K., Gopala Rao, D., and Krishna, K.S.
Geophysical and geological studies of Laxmi Ridge, a continental fragment
in the Arabian Sea. AEG Convention and Seminar on “Recent Advances in
Applied Geophysics” held at Bangalore during 9-11 December 1993,
Abstract, pp. 33.` },
    { description: `9. Gopal, S., Bhushan, R., Krishna, K.S., Saxena, S.M., Chaubey, A.K.
Remarks on paleomagnetic results of basalt. AEG Convention and Seminar
on “Recent Advances in Applied Geophysics” held at Bangalore during
9-11 December 1993, Abstract, pp. 34.` },
    { description: `10. Kotlia, B.S., Chaubey, A.K. and Lal, N. Paleomagnetic, Rock magnetic
and geochemical studies of basaltic rocks from Koyna-Warna region,
Deccan Volcanic Province (Maharashtra). AEG Convention and Seminar
on “Recent Advances in Applied Geophysics” held at Bangalore during
9-11 December 1993, Abstract, pp. 38.` },
    { description: `11. Chaubey, A.K., Singh, I.B., Shankar, U., Gopal, S. A seismic refraction
profiling in Mangyshlak (Aral Sea). AEG Convention and Seminar on
“Recent Advances in Applied Geophysics” held at Bangalore during
9-11 December 1993, Abstract, pp. 39.` },
    { description: `12. Chaubey, A.K. and Srinivasan, R. Weaker evidence of asteroid impact
in Deccan but deeper evidence through geophysics. 16th Annual
Convention and Seminar of AEG on “Indian Continental Margins”
held at DAE, C.A.E.R., Jaipur, during 27-29 November 1995, Abstract,
pp. 144.` },
    { description: `13. Chaubey, A.K. and Saxena, S.M. Magnetic fabric studies of deep-sea
sediments. Seminar on Palaeomagnetism and Earth’s history held at NGRI,
Hyderabad during 9-10 January 1996, Abstract.` },
    { description: `14. Kotlia, B.S., Chaubey, A.K., Saha, A.K., Rock magnetic and geochemical
studies of late Cretaceous DSDP Site 216 latitudes basalts. Seminar on
Palaeomagnetism and Earth’s history held at NGRI, Hyderabad during
9-10 January 1996, Abstract.` },
    { description: `15. Rao, G.S., Kotlia, B.S., Kalpana, Devi, H.Y., Chaubey, A.K. Geochemistry
and magnetic properties of Malwan (India) basalt and comparison
with Chagos-Laccadive ridge basalts. Seminar on Palaeomagnetism
and Earth’s history held at NGRI, Hyderabad during 9-10 January
1996, Abstract.` },
    { description: `16. Sreenivas, J., Kotlia, B.S., Chaubey, A.K. A comparative magnetic
petrography of Koyna and Mahabaleshwar basalts, Deccan
Volcanic Province (India). Seminar on Palaeomagnetism and Earth’s
history held at NGRI, Hyderabad during 9-10 January 1996, Abstract.` },
    { description: `17. Srinivas, K., Kotlia, B.S., Chaubey, A.K. Paleomagnetic and mineralogical
studies of Koyna basalts. Seminar on Palaeomagnetism and Earth’s
history held at NGRI, Hyderabad during 9-10 January 1996, Abstract.` },
    { description: `18. Saxena, S.M., Kotlia, B.S., Chaubey, A.K. Paleomagnetic and mineralogical
studies of Mahabaleshwar basalts, Western Ghats, India.
Seminar on Palaeomagnetism and Earth’s history held at NGRI,
Hyderabad during 9-10 January 1996, Abstract.` },
    { description: `19. Srinivas, K., Kotlia, B.S., Chaubey, A.K. Paleomagnetic and magnetic
fabric studies of Sadashivghat basalts, Satara, Maharashtra (India).
Seminar on Palaeomagnetism and Earth’s history held at NGRI,
Hyderabad during 9-10 January 1996, Abstract.` },
    { description: `20. Kotlia, B.S., Lal, N., Chaubey, A.K. Final results of paleomagnetic
studies of Koyna basalt (Deccan). Seminar on Palaeomagnetism
and Earth’s history held at NGRI, Hyderabad during 9-10 January 1996,
Abstract.` },
    { description: `21. Sinha, G.R., Saxena, S.M., Chaubey, A.K. High resolution surface-flag
gravity surveys along with detailed magnetic investigations around
Dabra Juna Sagar Kantha (North-West India). Seminar on
Geophysics and its applications (India, Bangladesh and Nepal)
held at NGRI, Hyderabad during 23-24 March 2000, Abstract, p.11.` },
    { description: `22. Subba Raju, L.V.; Saxena, S.M.; Chaubey, A.K.; Muralidharan,
R.; Murthy, S.R.; et al., 2000. Studies of basement structure off
the west coast of India using geophysical methods. IGU Onshore Technical
Session of “Mineral, Energy and Environment” held at NIO, Goa
during 5-6 October 2000, Abstract.` },
    { description: `23. Saxena, S.M.; Subba Raju, L.V.; Muralidharan, R.; Chaubey, A.K.;
et al., 2000. Seismic and geophysical study of the Ninetyeast Ridge
off the east coast of India and its implication. IGU Onshore Technical
Session of “Mineral, Energy and Environment” held at NIO, Goa
during 5-6 October 2000, Abstract.` },
    { description: `24. Mitra, P.S.; Jain, A.K.; Chaubey, A.K.; et al., 2001. Crustal structure
of the Laxmi Ridge, NW India: a geophysical study. Seminar/Convention on
Recent Trends in Exploration (NIO-SUTSTAR), held at NIO, Goa,
9-11 January 2001, Abstract.` },
    { description: `25. Saxena, S.M.; Mitra, P.S.; Jain, A.K.; Chaubey, A.K.; et al.,
2002. Geophysical experiments in exploring coastal geomorphology of
India. National Conference on Coastal Geoscience and Pollution
monitoring (NIO, Goa), held during 8-10 October 2002, Abstract.` },
    { description: `26. Kotlia, B.S.; Saxena, S.M.; Chaubey, A.K.; et al., 2002. Chronology
and paleomagnetic constraints on magnetic lineations in sediments
drilled at ODP Site 758: in the northern Bay of Bengal. National
Conference on Coastal Geoscience and Pollution monitoring
(NIO, Goa), held during 8-10 October 2002, Abstract.` },
    { description: `27. Saxena, S.M.; Saxena, P.K.; Reddy, B.V.; Saxena, R.; Lal, N.;
Chaubey, A.K., 2003. Paleosecular variation in Central Himalayan
Lakes using micro-lab, NGRI. Seminar/Symposium held at NGRI, Hyderabad,
13-15 August 2003, Abstract.` },
    { description: `28. Kotlia, B.S.; Lal, N.; Saxena, S.M.; Saxena, P.K.; Gupta, M.;
Rao, C.V.; Chaubey, A.K.; Saxena, R., 2004. Onset of
Neo-Mercurian thermal remanent magnetism (NRM) in the Deccan
basalts. Seminar held at NGRI, Hyderabad, 12 August 2004, Abstract.` },
    { description: `29. Kotlia, B.S.; Lal, N.; Saxena, S.M.; Chatterjee, N.K.; Rahman, S. Z.;
Gupta, M. et al., 2006. Paleosecular variation in Indian Ocean sediments.
67th Annual Convention of Institute of Indian Geographers (IGC 2006),
held at BHU, Varanasi, 15-17 Nov 2006, Abstract.` },
    { description: `30. Kotlia, B.S.; Saxena, S.M.; Lal, N.; Saxena, R.; Gupta, M.; Chaubey, A.K.;
2010. Magnetic and geochemical study of the Mahanadi river basin.
68th Annual Convention of Institute of Indian Geographers (IGC 2010),
held at Pune University, 8-10 Oct 2010, Abstract.` },
    { description: `31. Kotlia, B.S.; Kumar, S.; Chaubey, A.K.; et al., 2013.
Analytical study of trend of chemical weathering indices for Narmada,
Son, Mahanadi and Tapi rivers (central India). National Conference
on Coasts in Changing World (CoRe), Goa, held during 1-4 Jan 2013,
Abstract.` },
    { description: `32. Kotlia, B.S.; Kumar, S.; Chaubey, A.K.; et al., 2015.
Principal Component, factor analysis and outlier detection of geochemical
indices to estimate chemical weathering in Ganga and Brahmaputra
basins (India). 35th International Geological Congress, Cape Town, 2016,
Abstract.` },
    { description: `33. Chaubey, A.K.; Subba Raju, L.V.; Chaubey, V.S., 2016.
Improving the strength and durability properties of concrete
by addition of glass waste powder. 35th International Geological
Congress, Cape Town, 2016, Abstract.` },
    { description: `34. Kumar, S.; Kotlia, B.S.; Chaubey, A.K.; et al., 2017.
GIS based mapping of coalfire affected zones in selected parts of
Singrauli, Sonbhadra and Mirzapur districts, (UP, India). 36th Annual
General Meeting and International Conference of IGU, on “Geospatial
Technology – Emerging Trends and Applications” held during 17-20
October 2017, NIE Campus, Chennai, Abstract.` },
    { description: `35. Mishra, A.; Chaubey, A.K.; Kumar, S.; et al., 2020.
Biostratigraphic, sedimentological and geochemical constraints on the
Pliocene–Pleistocene evolution of the Bengal Fan in the Bay of Bengal.
17th Biennial International Conference and Exposition on Petroleum
Geophysics (SPG), held at Delhi University, 5–7 Feb 2020, Extended
Abstract, 564-565.` },
    { description: `36. Mitra, P.S., Chaubey A.K. and Mohanty W.K., 2024.
Seismic P-wave velocity modelling using deep learning algorithm
for subsurface investigation. 61st Annual Convention of IGU on
Advances in Earth System Sciences with special reference to weather
and climate, Organized at Banaras Hindu University, Varanasi,
3 - 5 December 2024, pp. 171.` },
    { description: `37. Vashishtha, P. and Chaubey, A.K., 2024.
2D gravity and magnetic modelling of the Carlsberg Ridge,
NW Indian Ocean: Insights into lithospheric structure and tectonics.
61st Annual Convention of IGU on Advances in Earth System
Sciences with special reference to weather and climate, Organized
at Banaras Hindu University, Varanasi, 3 - 5 December 2024,
pp. 218-219.` }
  ]
};


export default data;
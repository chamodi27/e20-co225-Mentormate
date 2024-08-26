import React from 'react'
import Mcq from "../Components/mcq";
import Navbar from '../Components/Navbar';
import InstructioncardBio from '../Components/instructioncardBio';
import { ChakraProvider } from '@chakra-ui/react';
import q31_1 from '../assets/paper22/q31_1.png';
import q31_2 from '../assets/paper22/q31_2.png';
import q31_3 from '../assets/paper22/q31_3.png';
import q31_4 from '../assets/paper22/q31_4.png';
import q31_5 from '../assets/paper22/q31_5.png';
import q36 from '../assets/paper22/q36.png';
import { Button, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';


function bioPaper2022() {
  return (
    <>
    <Navbar/>
    <ChakraProvider>
        
        <br></br>
        <br></br>
        <Mcq
        question=" 1. Which of the following statements regarding lipids is correct?"
        options={[
          { value: "1", label: "(1) Lipids are macromolecules consisting of C, H and O. " },
          { value: "2", label: "(2) Each hydrocarbon chain of saturated fats contains one double bond. " },
          { value: "3", label: "(3) When fats are formed, glycerol and fatty acids are joined by hydrogen bonds. " },
          { value: "4", label: "(4) H:o ratio in lipids is higher than 2:1. " },
          { value: "5", label: "(5)  Two phosphate groups are present in a phospholipid molecule. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 2. In a compound light microscope, "
        options={[
          { value: "1", label: "(1) lenses reflect light to magnify the image of the specimen observed. " },
          { value: "2", label: "(2) resolution power is inversely proportional to the wavelength of light. " },
          { value: "3", label: "(3) the image produced by the eye piece lens is magnified by the objective lens.  " },
          { value: "4", label: "(4) the maximum magnification is usually 600 times of the actual size of the specimen. " },
          { value: "5", label: "(5) resolution power is 0.2 mm." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 3. A function common to both rough endoplasmic reticulum and smooth endoplasmic reticulum is "
        options={[
          { value: "1", label: "(1) synthesis of glycoproteins.  " },
          { value: "2", label: "(2) synthesis of phospholipids.  " },
          { value: "3", label: "(3) metabolism of carbohydrates." },
          { value: "4", label: "(4) production of transport vesicles. " },
          { value: "5", label: "(5)  storage of calcium ions. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 4. Which of the following statements regarding subcellular components of an eukaryotic ccll is correct?  "
        options={[
          { value: "1", label: "(1) DNA and ribosomes are present in thylakoids " },
          { value: "2", label: "(2) Outer membrane of a mitochondrium contains stalk particles" },
          { value: "3", label: "(3) Glyoxysomes have enzymes required to convert latty acids to glycolipids. " },
          { value: "4", label: "(4) Golgi apparatus manufactures cellulose. " },
          { value: "5", label: "(5) Chromatin is embedded in nuclear lamina, which is made up of protein. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="5. Which of the following statements regarding enzymes is correct? "
        options={[
          { value: "1", label: "(1) Activators affect the function of enzymes by binding to active sites through covalent bonds synthesis of glycoproteins.  " },
          { value: "2", label: "(2) Shape of the active sites of enzymes changes due to lemperatures higher than the optimum level. " },
          { value: "3", label: "(3) Many competitive inhibitors bind to active sites ol enzymes irreversibly and change their shape" },
          { value: "4", label: "(4) Toxins bind to enzymes reversibly through covalent bonds. " },
          { value: "5", label: "(5) Co-enzymes are proteinous componenis wich are permanently or temporarily bound to enzymes. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 6. The electron transport chain "
        options={[
          { value: "1", label: "(1) is located in the matrix of mitochondria.   " },
          { value: "2", label: "(2) nerales two molecules of ATP on average due to oxidation of one NADH molecule." },
          { value: "3", label: "(3) uses molecular oxygen as the first electron acceplor. " },
          { value: "4", label: "(4) enerates one molecule of ATP on average due to oxidation of one FADH, molecule. " },
          { value: "5", label: "(5) ) is composed of protein and non-protein molecules. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="7. Four events of aerobic respiration of a glucose molecule are as follows:<br>
                    A-Release of two CO<sub>2</sub>, molecules by decarboxylation <br>
                    B-Oxidation of NADH and FADH<sub>2</sub> <br>
                    C-Oxidative phosphorylation <br>
                    D - Substrate level phosphorylation <br>
                  The correct sequence of occurrence of above events is "
        options={[
          { value: "1", label: "(1) A, C, B and D.  " },
          { value: "2", label: "(2) A, D, B and C.  " },
          { value: "3", label: "(3) B, C, A and D." },
          { value: "4", label: "(4) B, D, A and C. " },
          { value: "5", label: "(5) B, D, C and A. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="8. The three eras of the Phanerozoic eon (A-C) and fve events that took place in those eras (P-T) are given below. Select the answer that indicates the correct 'era-event' combinations. <br>
                    <Strong> Era<Strong/><br/>
                    A-Palaeozoic <br>
                    B-Mesozoic<br>
                    C-Cenozoic <br>
                    <Strong> Event<Strong/><br/>
                    P-rigin of mammals <br>
                    Q-Origin of reptiles <br>
                    R-ominance of gymnosperms<br>
                    S-Dominance of amphibians<br>
                    T-Radiation of birds<br> "
        options={[
          { value: "1", label: "(1) A-S, B-R, C-T, A-Q, B-P " },
          { value: "2", label: "(2) A-Q. B-P, C-R, B-S, B-T " },
          { value: "3", label: "(3) A-S, B-R, C-Q, B-T, C-P" },
          { value: "4", label: "(4) A-Q, B-S, C-P, A-R, B-T " },
          { value: "5", label: "(5) A-S, B-R, C-T, B-Q., C-P " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 9.Which of the following is considered as an artificial group in the classi fication of organisms?"
        options={[
          { value: "1", label: "(1) Bacteria" },
          { value: "2", label: "(2) Protista" },
          { value: "3", label: "(3) Fungi " },
          { value: "4", label: "(4) Arthropoda" },
          { value: "5", label: "(5) Plantae " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 10. Select the pair which is most likely to have the highest number of common characteristics."
        options={[
          { value: "1", label: "(1) acteria and Archebacteria" },
          { value: "2", label: "(2) Annelida and Nematoda " },
          { value: "3", label: "(3) Bats and whales " },
          { value: "4", label: "(4) Birds and reptiles " },
          { value: "5", label: "(5) Lycophyta and Pterophyta " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="11. Which of the following statements regarding seedless vascular plants is/are correct?<br/>
                      A- All club mosses are homosporous. <br/>
                      B-Some pterophytes are homosporous.<br/>
                      C-Some lycophytes are heterosporous. "
        options={[
          { value: "1", label: "(1) A only. " },
          { value: "2", label: "(2) A and B only. " },
          { value: "3", label: "(3) A and C only. " },
          { value: "4", label: "(4) B and C only. " },
          { value: "5", label: "(5) A. B and C " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 12. Which of the following features is present only in one class of the phylum Chordata? "
        options={[
          { value: "1", label: "(1) Ectothermy " },
          { value: "2", label: "(2) Teeth " },
          { value: "3", label: "(3) Four-chambered heart" },
          { value: "4", label: "(4) Colour vision " },
          { value: "5", label: "(5) Cycloid scales" },
        ]}

      />
        
         <br></br>
        <br></br>
        <Mcq
        question=" 13. Meristematic cells  "
        options={[
          { value: "1", label: "(1) contribute to both primary growth and secondary growth. " },
          { value: "2", label: "(2) undergo both mitotic and meiotic divisions." },
          { value: "3", label: "(3) may be either spherical or elongated." },
          { value: "4", label: "(4) are present only in root tips and shoot tips." },
          { value: "5", label: "(5) contain a nucleus shifted to a side due to the presence of a large central vacuole. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 14. Which of the following contribute to opening of stomata?
                      A-Increase in turgor in guard cells. <br/>
                      B-Production of Abscisic acid<br/>
                      C-Flow of water from guard cells into substomatal cavity
                      D-Accumulation of K<sup>+</sup> in guard cells"
        options={[
          { value: "1", label: "(1) A and B only." },
          { value: "2", label: "(2) A and C only." },
          { value: "3", label: "(3) A and D only. " },
          { value: "4", label: "(4) B and C only. " },
          { value: "5", label: "(5) B and D only. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="15. Passive movement of water and hydrophilic solutes across membranes with the help of transport proteins is called"
        options={[
          { value: "1", label: "(1) diffusion." },
          { value: "2", label: "(2) osmosis." },
          { value: "3", label: "(3) imbibition." },
          { value: "4", label: "(4) facilitated diffusion." },
          { value: "5", label: "(5) bulk flow." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="16. Nitrogen (N) and boron (B) can be absorbed into plants respectively as, "
        options={[
          { value: "1", label: "(1) NO<sub>3</sub><sup>-</sup> and H<sub>2</sub>BO<sub>3</sub><sup>-</sup>. " },
          { value: "2", label: "(2) NH<sub>4</sub><sup>+</sup> and HBO<sub>3</sub><sup>2-</sup>." },
          { value: "3", label: "(3) NO<sub>2</sub><sup>-</sup> and H<sub>2</sub>BO<sub>3</sub><sup>-</sup>." },
          { value: "4", label: "(4) NO<sub>3</sub><sup>-</sup> and BO<sub>3</sub><sup>3-</sup>. " },
          { value: "5", label: "(5) NO<sub>2</sub><sup>-</sup> and HBO<sub>3</sub><sup>2-</sup> " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 17. Which of the following structures of an angiosperm is diploid? "
        options={[
          { value: "1", label: " (1) Megaspore" },
          { value: "2", label: " (2) Microspore" },
          { value: "3", label: "(3)  Ovule"},
          { value: "4", label: "(4) Pollen grain" },
          { value: "5", label: "(5) Embryo sac" },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 18. Plant hormones that regulate cell division, promote leaf senescence and enhance apical dominance
are respectively"
        options={[
          { value: "1", label: "(1) gibberellins, ethylene and cytokinins." },
          { value: "2", label: "(2) gibberellins, abscisic acid and cytokinins. " },
          { value: "3", label: "(3) auxin, ethylene and cytokinins." },
          { value: "4", label: "(4) cytokinins, ethylene and auxin." },
          { value: "5", label: "(5) cytokinins, abscisic acid and auxin. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 19.  Select the correct answer based on the following two statements. <br></br>
                    A- function of connective tissues is providing support.<br></br>
                    B- Reticular fibres provide strength to connective tissues.<br></br> "
        options={[
          { value: "1", label: " (1) Both A and B are correct and B contributes to A." },
          { value: "2", label: " (2)  Both A and B are correct and B docs not contribute to A. " },
          { value: "3", label: "(3)  A is correct and B is incorreet."},
          { value: "4", label: "(4) A is incorrect and B is correct." },
          { value: "5", label: "(5) Both A and B are incorrect." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="20. In man, synthesis of vitamin B, recovery of ions and fermentation of undigested material take
place respecti vely in"
        options={[
          { value: "1", label: " (1) rectum, duodenum and cecum. " },
          { value: "2", label: " (2) small intestine, colon and rectum." },
          { value: "3", label: "(3) colon, stomach and small intestine."},
          { value: "4", label: "(4) small intestine, gall bladder and large intestine." },
          { value: "5", label: "(5) colon, small intestine and cecum." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 21. Anti-B antibodies are present in the blood plasma of persons having which of the following blood groups?"
        options={[
          { value: "1", label: " (1) A and B" },
          { value: "2", label: " (2) A and O" },
          { value: "3", label: " (3) A and AB"},
          { value: "4", label: " (4) A. B and O" },
          { value: "5", label: " (5) A, AB and O" },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="22. Which of the following statements regarding the lymphatic system of man is correct?"
        options={[
          { value: "1", label: " (1) Lymph vessels differ from arteries duc to absence of valves. " },
          { value: "2", label: " (2) Lymnph drains into the arteries at the base of the neck via two large ducts." },
          { value: "3", label: " (3) Comnposition of lymph is the same as blood plasma"},
          { value: "4", label: " (4) Lymphatic system is involved in the absorption of vitamin C in the small intestine." },
          { value: "5", label: " (5) Lymph nodes are mainly composed of connective tissues and white blood cells." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="23. Select the correct statement regarding antibodies."
        options={[
          { value: "1", label: " (1) They have several epitopes for binding with specific antigens. " },
          { value: "2", label: " (2) They have the same Y-shaped structure as T Iymphocyte antigen receptors." },
          { value: "3", label: " (3) They can be transferred to another person to induce immunological memory. "},
          { value: "4", label: " (4) They can directly destroy specific pathogens in blood. " },
          { value: "5", label: " (5) They bind with specific antigens to activate the complement system" },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 24. In the human brain, cardiovascular centre is located in the"
        options={[
          { value: "1", label: " (1) hypothalamus." },
          { value: "2", label: " (2) mid brain." },
          { value: "3", label: " (3) pons Varolii."},
          { value: "4", label: " (4) medulla oblongata." },
          { value: "5", label: " (5) cercbellum. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 25. Some actions of the autonomic nervous system of man are given below.<br></br> 
                  A - Inhibits salivary gland secretion<br></br>
                  B - Stimulates activity of pancreas<br></br>
                  C - Promotes emptying of urinary bladder "
        options={[
          { value: "1", label: " (1) A only" },
          { value: "2", label: " (2) A and B only." },
          { value: "3", label: " (3) A and C only"},
          { value: "4", label: " (4) B and C only." },
          { value: "5", label: " (5) A, B and C" },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 26. Select the correct statement regarding sensory receptors of man."
        options={[
          { value: "1", label: " (1) Receptors for taste are modified neurons. " },
          { value: "2", label: " (2) Olfactory receptors show sensory adaptation." },
          { value: "3", label: " (3) Ruffini corpuscles detect cold. "},
          { value: "4", label: " (4) Cones are more sensitive to light than rods." },
          { value: "5", label: " (5) Hair cells of the vestibule of the ear detect angular movements. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="27. The hormone secreted by anterior pituitary which has non-tropic effects is"
        options={[
          { value: "1", label: " (1) oxytocin." },
          { value: "2", label: " (2) ACTH." },
          { value: "3", label: " (3) prolactin."},
          { value: "4", label: " (4) FSH. " },
          { value: "5", label: " (5) ADH " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="28. Mature sperms in man are stored until ejaculation in the"
        options={[
          { value: "1", label: " (1) seminiferous tubules. " },
          { value: "2", label: " (2) epididymis. " },
          { value: "3", label: " (3) seminal vesicles. "},
          { value: "4", label: " (4) prostate glands. " },
          { value: "5", label: " (5) bulbourethral glands. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="29. Select the correct statement regarding the reproductive system of human females. "
        options={[
          { value: "1", label: " (1) Medulla of the ovary contains ovarian follicles. " },
          { value: "2", label: " (2) Oogenesis starts al puberty." },
          { value: "3", label: " (3) Secondary oocyle arrested at metaphase I is released at ovulation. "},
          { value: "4", label: " (4) Secretory phase of the uterine cycle is coordinated with the luteal phase of the ovarian cycle." },
          { value: "5", label: " (5)  Implantation of embryo occurs at morula stage. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="30. Select the correct stalement regarding breast milk. "
        options={[
          { value: "1", label: " (1) Oxytocin stimulates synthesis of milk in mammary glands." },
          { value: "2", label: " (2) Elevated estradiol level in mother's blood at birth stimulates release of milk." },
          { value: "3", label: " (3) Colstrum contains more lactose compared to true breast milk "},
          { value: "4", label: " (4) White blood cells in breast milk provide sonme inmunity to infants. " },
          { value: "5", label: " (5) Sodium content is high in breast milk.  " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="31. Events that occur during the cross bridge cycle of skeletal muscle cell contraction are given below.<br></br> 
                        A - Myosin head binds to actin forming cross bridges.<br></br>
                        B - Myosin head enters into a higher energy state.<br></br>
                        C - Sliding of thin filaments releasing ADP and phosphate from myosin.<br></br>
                        D - Binding of a new ATP molecule to myosin head detaching actin.<br></br>
                      Select the correct sequence of above events. "
        options={[
          { value: "1", label: <img src={q31_1} alt="q31_1" />  },
          { value: "2", label: <img src={q31_2} alt="q31_2" /> },
          { value: "3", label: <img src={q31_3} alt="q31_3" />},
          { value: "4", label: <img src={q31_4} alt="q31_4" /> },
          { value: "5", label: <img src={q31_5} alt="q31_5" /> },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="32. In sex linked inheritance of humans, "
        options={[
          { value: "1", label: " (1) most of the X-linked recessive disorders are expressed in the heterozygous genotype of females." },
          { value: "2", label: " (2) most of the X-linked recessive disorders are expressed in males. " },
          { value: "3", label: " (3) mothers transfer X-linked characters only to their daughters. "},
          { value: "4", label: " (4) fathers transfer X-linked characters only to their sons. " },
          { value: "5", label: " (5) males express only X-linked dominant disorders." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="33. If F<sub>2</sub>, generation of a monohybrid cross shows 1:2:1 ratio for both the phenotypes and genotypes, the type of inheritance"
        options={[
          { value: "1", label: " (1) is incomplete dominance but not codominance." },
          { value: "2", label: " (2) is codominance but not incomplete dominance. " },
          { value: "3", label: " (3) is either incomplete dominance or codominance. "},
          { value: "4", label: " (4) is neither incomplete dominance nor codominance. " },
          { value: "5", label: " (5) cannot be determined as the information given is insufficient." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="34. A point mutation"
        options={[
          { value: "1", label: " (1) ensures variation." },
          { value: "2", label: " (2) may lead to carcinogenesis. " },
          { value: "3", label: " (3) may often be lethal. "},
          { value: "4", label: " (4) never leads to change the function of a protein." },
          { value: "5", label: " (5) may lead to aneuploidy." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="35. Select the answer that contains only the products of recombinant DNA technology"
        options={[
          { value: "1", label: " (1) Insect pest tolerant maize, rice with increased provitamin A, tissue cultured banana " },
          { value: "2", label: " (2) Papaya resistant to papaya ring spot virus, Texel sheep, soybean with increased oleic acid content" },
          { value: "3", label: " (3) Hepatitis B vaccine, non-browning apple, triploid water melon "},
          { value: "4", label: " (4) Seedless grapes, drought resistant soybean, chymosin for making cheese " },
          { value: "5", label: " (5) 'RoundUP Ready' soybean, human insulin, tomatoes with delayed fruit ripening " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question={`36. The food web of a terrestrial ecosystem is given below:<br></br>
          <img src="${q36}" alt="q36" style="max-width: 100%; height: auto;" />  <br></br>
          The number of secondary and tertiary consumers in the above ecosystem are respectively`}
        options={[
          { value: "1", label: " (1) five and two." },
          { value: "2", label: " (2) three and five." },
          { value: "3", label: " (3) four and three."},
          { value: "4", label: " (4) four and four." },
          { value: "5", label: " (5) five and three." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="37. Four organisms seen in Sri Lanka (A-D) and four fcatures which are important when biodiversity
is considered (P-S) are given below. Select the answer that gives the correct combinations.<br></br> 
               <Strong>Organism</Strong><br></br>
                A - Guinea grass<br></br>
                B - Black ruby barb<br></br>
                C-  Snakehead<br></br>
                D - Rubber<br></br>
                <Strong>Feature important in biodiversity</Strong><br></br>
                A - Endemic<br></br>
                B - Exotic<br></br>
                C - Invasive<br></br>
                D - Indigenous<br></br>"
        options={[
          { value: "1", label: " (1) A-P. B-S, C-S. D-Q " },
          { value: "2", label: " (2) A-R. B-P. C-Q. D-S " },
          { value: "3", label: " (3) A-R. B-P. C-S. D-Q"},
          { value: "4", label: " (4) A-R. B-S. C-P. D-Q " },
          { value: "5", label: " (5)  A-S. B-P, C-R, D-S" },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question= " 38. Asexual reproduction by simple cell division/fission is seen in "
        options={[
          { value: "1", label: " (1) filamentous fungi and colonial filamentous cyanobacteria. " },
          { value: "2", label: " (2) unicellular protists and filamentous fungi." },
          { value: "3", label: " (3) colonial filamentous cyanobacteria and unicellular fungi."},
          { value: "4", label: " (4) bacteria and colonial unicellular cyanobacteria. " },
          { value: "5", label: " (5) colonial nonfilamentous cyanobacteria and bacteria. " },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question=" 39. <i>Escherichia coli</i>"
        options={[
          { value: "1", label: " (1) is an obligatory anaerobic microorganism." },
          { value: "2", label: " (2) synthesizes vitamin E in the large intestine of man. " },
          { value: "3", label: " (3) is the first organism to enter the intestine of a new born baby."},
          { value: "4", label: " (4) is an opportunistic pathogen that can infect lungs. " },
          { value: "5", label: " (5) is ingested as probiotics during antibiotic therapy." },
        ]}

      />

        <br></br>
        <br></br>
        <Mcq
        question="40. Some plants used in the floriculture industry and their vegetative propagation methods are given below<br></br>
                    (A) <i>Hibiscus</i> - Layering<br></br>
                    (B) Snake plant - Using leaf cuttings<br></br>
                    (C) Spider plant - Grafting<br></br>
                    (D) Begonia Separation<br></br>
                  Which of the above combinations is correct?"
        options={[
          { value: "1", label: " (1) (A) and (B) only." },
          { value: "2", label: " (2) (A) and (D) only. " },
          { value: "3", label: " (3) (B) and (C) only. "},
          { value: "4", label: " (4) (B) and (D) only. " },
          { value: "5", label: " (5) (C) and (D) only. " },
        ]}

      />
      {/* bio paper instructions */}
      <InstructioncardBio/>

        <br></br>
        <br></br>
        <Mcq
        question="41. Select the response/responses which indicates/indicale examples tor hve adjacent hierarchial levels of biological organization<br/>
                        (A) Cellulose, tracheid, xylem, root, plant<br/>
                        (B) DNA, nucleus, neuron, brain, nervous system<br/>
                        (C) Nervous system, deer, herd of deer, wild an1mals, dry mixed evergreen forest .<br/>
                        (D) ATP, mitochondria, eosinophil, blood. heart<br/>
                        (E) RuBP, chloroplast, mesophyll cell, leaf, plant <br/>"
        options={[
          { value: "1", label: " (1) " },
          { value: "2", label: " (2) " },
          { value: "3", label: " (3) "},
          { value: "4", label: " (4) " },
          { value: "5", label: " (5) " },
        ]}
      />

<br></br>
        <br></br>
        <Mcq
        question="42. Which of the following statemnents rcgarding tracheids is/are corrcct?  <br/>
                      (A) They are found in club mosses and hornworts.<br/>
                      (B) They are long broad cells with tapering ends. <br/> 
                      (C) Their secondary walls are thickened with lignin.<br/>
                      (D) They are involved in conducting water. <br/>
                      (E) Mitochondria present in the cytoplasm of mature tracheids provide energy for ther functioning.<br/>"
        options={[
          { value: "1", label: " (1) " },
          { value: "2", label: " (2) " },
          { value: "3", label: " (3) "},
          { value: "4", label: " (4) " },
          { value: "5", label: " (5) " },
        ]}
      />

<br></br>
        <br></br>
        <Mcq
        question="43. Select the correct statement/statements regarding clotting of blood in man. <br/>
                        (A) Fibrinogen is converted to fibrin by thrombin. <br/>
                        (B) Prothrombrin present in platelets is converted to thrombin. <br/>
                        (C) Heparin prevents conversion of prothrombin to thrombin. <br/>
                        (D) Vitamin K is a cloting factor present in blood plasma. <br/>
                        (E) Platelets become sticky due to agglutinogen present on their surface.<br/>"
        options={[
                  { value: "1", label: " (1) " },
                  { value: "2", label: " (2) " },
                  { value: "3", label: " (3) "},
                  { value: "4", label: " (4) " },
                  { value: "5", label: " (5) " },
                ]}
              />

        <br></br>
        <br></br>
        <Mcq
        question="44. Which of the following combinations is/are correct regarding the main nitrogenous excretory product of the given animal group?<br/>
                    <Strong>Animal group ,Main nitrogenous excretory product </Strong><br/>
                    (A) Birds,Uric acid<br/>
                    (B) Bony fishes ,Ammonia<br/>
                    (C) Adult amphibians,Ammonia<br/>
                    (D) Sharks,Urea<br/>
                    (E) Land snails,Urea<br/>"
                    options={[
                      { value: "1", label: " (1) " },
                      { value: "2", label: " (2) " },
                      { value: "3", label: " (3) "},
                      { value: "4", label: " (4) " },
                      { value: "5", label: " (5) " },
                    ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="45. In the human skeleton <br/>
                    (A) frontal bone contributes to form the cranium and face.<br/>
                    (B) twelve pairs of ribs form the lateral walls of the thoracic cage<br/>
                    (C) lumbar curvature of the vertebral column develops at about three months after birth.<br/>
                    (D) special joint between the first metacarpal and a carpal bone permits precision grip of man.<br/>
                    (E) arches of the foot are important in distributing the body weight evenly over the foot only when stationary.<br/>"
                    options={[
                      { value: "1", label: " (1) " },
                      { value: "2", label: " (2) " },
                      { value: "3", label: " (3) "},
                      { value: "4", label: " (4) " },
                      { value: "5", label: " (5) " },
                    ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="46. Core of supercoiled prokaryotic chromosome<br/>
                      (A) binds the loops of compacted DNA.<br/>
                      (B) attaches the chromosome to the membrane.<br/>
                      (C) facilitates relaxing of entire chromosome during replication<br/>
                      (D) allows domains to relax independently during transcription.<br/>
                      (E) guides RNA polymerase to the site of initiation of transcription.<br/>"
                      options={[
                        { value: "1", label: " (1) " },
                        { value: "2", label: " (2) " },
                        { value: "3", label: " (3) "},
                        { value: "4", label: " (4) " },
                        { value: "5", label: " (5) " },
                      ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="47. Which of the following responses indicates/indicate in correct order, the plants that are found in three ecosystems located in increasing altitudes of Sri Lanka?<br/>
                          (A) <i>Salicornia sp.</i>, Heerassa, <i>Themeda </i><br/>
                          (B) Kadol, Weera, Hora<br/>
                          (C) Katu ikili, Gal weralu, Ranawara<br/>
                          (D) Palu, Hal, Tussock grass<br/>
                          (E) Karan koku, Naa, Gini andara<br/> "
                          options={[
                            { value: "1", label: " (1) " },
                            { value: "2", label: " (2) " },
                            { value: "3", label: " (3) "},
                            { value: "4", label: " (4) " },
                            { value: "5", label: " (5) " },
                          ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="48. Which of the following statements regarding the use of microorganisms in industries is/are correct?<br/>
                        (A) Invertase is produced using <i>Saccharomyces cerevisiae. </i><br/>
                        (B) <i>Thiobacillus ferrooxidans</i> is used in the extraction of copper from lower grade ores contauning sulphur and iron.<br/>
                        (C) Riboflavin is produced through metabolic activity of <i>Acetobacter sp. </i><br/>
                        (D) Human growth hormone is produced using genetically engineered <i>Escherichia coll.</i><br/>
                        (E) Citric acid is produced using <i>Gluconobacter sp</i><br/>  "
                        options={[
                          { value: "1", label: " (1) " },
                          { value: "2", label: " (2) " },
                          { value: "3", label: " (3) "},
                          { value: "4", label: " (4) " },
                          { value: "5", label: " (5) " },
                        ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="49. Which of the following bacterial species causes/cause both water borne and food borne diseases?<br/>
                    (A) <i>Salmonclla sp.</i><br/>
                    (B) <i>Staphylococcus sp</i><br/>
                    (C) <i>Vibrio sp.</i> <br/>
                    (D) <i>Shigella sp.</i><br/>
                    (E) <i>Clostridium sp.</i> <br/>"
                    options={[
                      { value: "1", label: " (1) " },
                      { value: "2", label: " (2) " },
                      { value: "3", label: " (3) "},
                      { value: "4", label: " (4) " },
                      { value: "5", label: " (5) " },
                    ]}
      />

        <br></br>
        <br></br>
        <Mcq
        question="50. Which of the following should be caried oul monthly when maintaining an aquarium?<br/>
                        (A) Cleaning of air diffuse stoncs
                        (B) Pruning of aquarium plants
                        (C) Scraping algace grown on glass surface
                        (D) Removing organic debris accumulated under filter plates
                        (E) Removing diseased fish  "
                        options={[
                          { value: "1", label: " (1) " },
                          { value: "2", label: " (2) " },
                          { value: "3", label: " (3) "},
                          { value: "4", label: " (4) " },
                          { value: "5", label: " (5) " },
                        ]}
      />
      <br></br>
      <br></br>
      
      <Stack direction='row' spacing={4}>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
          Submit Biology first part 
        </Button>
      </Stack>
      </ChakraProvider>
    </>
  )
}

export default bioPaper2022
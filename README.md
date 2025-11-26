<mxfile host="app.diagrams.net">
  <diagram id="PGFPatentFlow" name="PGF Patent Architecture">
    <mxGraphModel dx="1280" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageWidth="1920" pageHeight="1080" pageScale="1" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>

        <!-- TITLE -->
        <mxCell id="2" value="Traditional Masking vs. Privacy-Gradient Filter (PGF) – Low-Level Architecture" style="text;html=1;align=center;verticalAlign=top;fontStyle=1;fontSize=16;" vertex="1" parent="1">
          <mxGeometry x="200" y="10" width="900" height="30" as="geometry"/>
        </mxCell>

        <!-- ===== TOP ROW: TRADITIONAL APPROACH ===== -->

        <!-- Data Vault (Traditional) -->
        <mxCell id="10" value="Data Vault" style="shape=cylinder;whiteSpace=wrap;html=1;verticalLabelPosition=bottom;verticalAlign=top;" vertex="1" parent="1">
          <mxGeometry x="60" y="80" width="70" height="90" as="geometry"/>
        </mxCell>

        <!-- Masking / Anonymization -->
        <mxCell id="11" value="Masking &amp; Anonymization&#xa;(Traditional PII Protection)" style="shape=document;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="190" y="90" width="200" height="70" as="geometry"/>
        </mxCell>

        <!-- Sanitized Training Data -->
        <mxCell id="12" value="Sanitized Training Data&#xa;(Loss of rare behaviour details)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="440" y="90" width="210" height="70" as="geometry"/>
        </mxCell>

        <!-- GAD Model Training (traditional) -->
        <mxCell id="13" value="GAD Model Training&#xa;Generative + Adversarial + Diffusion&#xa;(may still memorize rare rows)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="700" y="80" width="260" height="90" as="geometry"/>
        </mxCell>

        <!-- Traditional arrows -->
        <mxCell id="14" edge="1" parent="1" source="10" target="11" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="15" edge="1" parent="1" source="11" target="12" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="16" edge="1" parent="1" source="12" target="13" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Traditional caption -->
        <mxCell id="17" value="Traditional approach: data is masked BEFORE training. Generative models can still overfit and memorize rare, high-risk patterns." style="text;html=1;whiteSpace=wrap;align=left;" vertex="1" parent="1">
          <mxGeometry x="60" y="180" width="900" height="40" as="geometry"/>
        </mxCell>

        <!-- ===== BOTTOM ROW: NOVEL PGF APPROACH ===== -->

        <!-- Data Vault (Novel) -->
        <mxCell id="30" value="Data Vault" style="shape=cylinder;whiteSpace=wrap;html=1;verticalLabelPosition=bottom;verticalAlign=top;" vertex="1" parent="1">
          <mxGeometry x="60" y="270" width="70" height="90" as="geometry"/>
        </mxCell>

        <!-- RISC-MASK Engine output -->
        <mxCell id="31" value="Risk-Masked Training Data&#xa;(RISC-MASK Engine)" style="shape=document;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="190" y="280" width="220" height="70" as="geometry"/>
        </mxCell>

        <!-- GAD Training Loop (box pointing into PGF) -->
        <mxCell id="32" value="GAD Training Loop&#xa;PRE-G / Adversarial / Diffusion&#xa;(forward + loss + raw gradients)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="450" y="270" width="260" height="90" as="geometry"/>
        </mxCell>

        <!-- Arrow from Data Vault to RISC-MASK -->
        <mxCell id="33" edge="1" parent="1" source="30" target="31" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Arrow from RISC-MASK to GAD Loop -->
        <mxCell id="34" edge="1" parent="1" source="31" target="32" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- ===== PGF INTERNALS (DASHED BOX) ===== -->

        <!-- Container for PGF internals -->
        <mxCell id="40" value="PGF – Privacy-Gradient Filter (inside training loop)" style="rounded=1;dashed=1;whiteSpace=wrap;html=1;strokeColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="750" y="240" width="420" height="190" as="geometry"/>
        </mxCell>

        <!-- Gradient Tap & Collector -->
        <mxCell id="41" value="Gradient Tap &amp;&#xa;Collector" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="40">
          <mxGeometry x="10" y="35" width="110" height="50" as="geometry"/>
        </mxCell>

        <!-- Rarity & Sensitivity Profiler -->
        <mxCell id="42" value="Rarity &amp; Sensitivity&#xa;Profiler" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="40">
          <mxGeometry x="150" y="35" width="120" height="50" as="geometry"/>
        </mxCell>

        <!-- Gradient Risk Analyzer -->
        <mxCell id="43" value="Gradient Risk&#xa;Analyzer" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="40">
          <mxGeometry x="290" y="35" width="110" height="50" as="geometry"/>
        </mxCell>

        <!-- Policy & Threshold Engine -->
        <mxCell id="44" value="Policy &amp;&#xa;Threshold Engine" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="40">
          <mxGeometry x="10" y="105" width="130" height="50" as="geometry"/>
        </mxCell>

        <!-- Gradient Transformation Modules -->
        <mxCell id="45" value="Gradient Transformation&#xa;Modules&#xa;- Clipping&#xa;- Adaptive Noise&#xa;- Selective Suppression" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="40">
          <mxGeometry x="170" y="105" width="230" height="70" as="geometry"/>
        </mxCell>

        <!-- PGF internal arrows -->
        <mxCell id="46" edge="1" parent="40" source="41" target="42" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="47" edge="1" parent="40" source="42" target="43" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="48" edge="1" parent="40" source="43" target="44" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="49" edge="1" parent="40" source="44" target="45" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Connection from GAD loop to PGF (gradients) -->
        <mxCell id="50" value="Raw gradients" style="endArrow=classic;dashed=0;html=1;fontSize=10;" edge="1" parent="1" source="32" target="41">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Sanitized gradients back to optimizer / models -->
        <mxCell id="51" value="Sanitized gradients&#xa;(after PGF)" style="endArrow=classic;dashed=0;html=1;fontSize=10;" edge="1" parent="1" source="45" target="32">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- ===== SYNTHETIC OUTPUT SECTION ===== -->

        <!-- Synthetic Data Generator -->
        <mxCell id="60" value="Synthetic Data Generator" style="shape=rectangle;rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="450" y="420" width="220" height="70" as="geometry"/>
        </mxCell>

        <!-- Synthetic Data Vault -->
        <mxCell id="61" value="Synthetic Data Vault" style="shape=cylinder;whiteSpace=wrap;html=1;verticalLabelPosition=bottom;verticalAlign=top;" vertex="1" parent="1">
          <mxGeometry x="720" y="410" width="80" height="100" as="geometry"/>
        </mxCell>

        <!-- Arrow from GAD Loop (with PGF) to Synthetic Generator -->
        <mxCell id="62" edge="1" parent="1" source="32" target="60" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Arrow from Generator to Vault -->
        <mxCell id="63" edge="1" parent="1" source="60" target="61" style="endArrow=classic;html=1;">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Novel caption -->
        <mxCell id="64" value="Novel PGF approach: gradients are inspected and modified INSIDE the training loop, so generative models learn general patterns but cannot memorize specific rare customer transactions." style="text;html=1;whiteSpace=wrap;align=left;" vertex="1" parent="1">
          <mxGeometry x="60" y="520" width="980" height="60" as="geometry"/>
        </mxCell>

      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

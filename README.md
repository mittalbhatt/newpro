<mxfile host="app.diagrams.net">
  <diagram id="PGFDiagram" name="PGF Low Level">
    <mxGraphModel dx="1280" dy="720" grid="1" gridSize="10" guides="1" tooltips="1"
                  connect="1" arrows="1" fold="1" page="1" pageWidth="1920"
                  pageHeight="1080" pageScale="1" math="0" shadow="0">
      <root>
        <!-- mandatory roots -->
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>

        <!-- Title -->
        <mxCell id="title" value="Privacy-Gradient Filter (PGF) – Low Level Architecture"
                style="text;html=1;align=center;verticalAlign=middle;fontStyle=1;fontSize=16;"
                vertex="1" parent="1">
          <mxGeometry x="300" y="20" width="700" height="30" as="geometry"/>
        </mxCell>

        <!-- MAIN FLOW (TOP) -------------------------------------------------->

        <!-- Data Vault -->
        <mxCell id="v1" value="Data Vault"
                style="shape=cylinder;whiteSpace=wrap;html=1;verticalLabelPosition=bottom;verticalAlign=top;"
                vertex="1" parent="1">
          <mxGeometry x="60" y="120" width="100" height="80" as="geometry"/>
        </mxCell>

        <!-- RISC-MASK Engine -->
        <mxCell id="v2" value="RISC-MASK Engine"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="210" y="125" width="150" height="60" as="geometry"/>
        </mxCell>

        <!-- Risk-masked Training Data -->
        <mxCell id="v3" value="Risk-masked&#xa;Training Data"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="390" y="125" width="190" height="60" as="geometry"/>
        </mxCell>

        <!-- GAD Training Loop (G/A/D models) -->
        <mxCell id="loop" value="GAD Training Loop&#xa;(Generative / Adversarial / Diffusion)"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="620" y="115" width="260" height="80" as="geometry"/>
        </mxCell>

        <!-- Edges main (top) -->
        <mxCell id="e1" style="endArrow=classic;html=1;" edge="1" parent="1" source="v1" target="v2">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e2" style="endArrow=classic;html=1;" edge="1" parent="1" source="v2" target="v3">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e3" style="endArrow=classic;html=1;" edge="1" parent="1" source="v3" target="loop">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- PGF CONTAINER ---------------------------------------------------->

        <!-- PGF dashed box -->
        <mxCell id="pgfbox" value="PGF – Privacy-Gradient Filter (inside training loop)"
                style="rounded=1;dashed=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="540" y="230" width="520" height="230" as="geometry"/>
        </mxCell>

        <!-- Gradient Tap & Collector -->
        <mxCell id="p1" value="Gradient Tap &amp;&#xa;Collector"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="560" y="260" width="160" height="50" as="geometry"/>
        </mxCell>

        <!-- Rarity & Sensitivity Profiler -->
        <mxCell id="p2" value="Rarity &amp; Sensitivity&#xa;Profiler"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="740" y="260" width="180" height="50" as="geometry"/>
        </mxCell>

        <!-- Gradient Risk Analyzer -->
        <mxCell id="p3" value="Gradient Risk&#xa;Analyzer"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="560" y="320" width="160" height="50" as="geometry"/>
        </mxCell>

        <!-- Policy & Threshold Engine -->
        <mxCell id="p4" value="Policy &amp; Threshold&#xa;Engine"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="740" y="320" width="180" height="50" as="geometry"/>
        </mxCell>

        <!-- Gradient Transformation Modules -->
        <mxCell id="p5" value="Gradient Transformation Modules&#xa;- Clipping&#xa;- Adaptive Noise&#xa;- Selective Suppression"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="560" y="380" width="360" height="70" as="geometry"/>
        </mxCell>

        <!-- Edges inside PGF -->
        <mxCell id="e4" style="endArrow=classic;html=1;" edge="1" parent="1" source="loop" target="p1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e5" style="endArrow=classic;html=1;" edge="1" parent="1" source="p1" target="p2">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e6" style="endArrow=classic;html=1;" edge="1" parent="1" source="p2" target="p3">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e7" style="endArrow=classic;html=1;" edge="1" parent="1" source="p3" target="p4">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e8" style="endArrow=classic;html=1;" edge="1" parent="1" source="p4" target="p5">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Sanitized gradients back to training loop -->
        <mxCell id="e9" value="sanitized gradients"
                style="endArrow=classic;html=1;fontSize=10;" edge="1" parent="1" source="p5" target="loop">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- SYNTHETIC OUTPUT ------------------------------------------------->

        <!-- Synthetic Data Generator -->
        <mxCell id="gen" value="Synthetic Data Generator"
                style="rounded=1;whiteSpace=wrap;html=1;"
                vertex="1" parent="1">
          <mxGeometry x="430" y="520" width="220" height="60" as="geometry"/>
        </mxCell>

        <!-- Synthetic Data Vault -->
        <mxCell id="vault2" value="Synthetic Data Vault"
                style="shape=cylinder;whiteSpace=wrap;html=1;verticalLabelPosition=bottom;verticalAlign=top;"
                vertex="1" parent="1">
          <mxGeometry x="700" y="510" width="100" height="90" as="geometry"/>
        </mxCell>

        <!-- Edges to generator & vault -->
        <mxCell id="e10" style="endArrow=classic;html=1;" edge="1" parent="1" source="loop" target="gen">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="e11" style="endArrow=classic;html=1;" edge="1" parent="1" source="gen" target="vault2">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

<mxfile host="app.diagrams.net">
  <diagram id="PGFPatentFlow" name="LowLevel-PGF-Privacy">
    <mxGraphModel dx="1400" dy="850" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageWidth="1800" pageHeight="950" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>

        <!-- Customer Data -->
        <mxCell id="cust1" value="Customer Data" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="40" y="60" width="150" height="70" as="geometry"/>
        </mxCell>

        <!-- Secure Vault -->
        <mxCell id="vault1" value="Secure Data Vault" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="40" y="180" width="150" height="70" as="geometry"/>
        </mxCell>
        <mxCell id="arrow1" style="endArrow=block;" edge="1" parent="1" source="cust1" target="vault1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Ingestion & Governance -->
        <mxCell id="ing1" value="Data Ingestion & Governance Gateway" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="260" y="180" width="230" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="arrow2" style="endArrow=block;" edge="1" parent="1" source="vault1" target="ing1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Schema Manager -->
        <mxCell id="sch1" value="Schema & Policy Manager" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="260" y="60" width="230" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="arrow3" style="endArrow=block;" edge="1" parent="1" source="sch1" target="ing1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- RISC-MASK -->
        <mxCell id="mask1" value="RISC-MASK Engine & D→D Masking Layer" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="550" y="180" width="230" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="arrow4" style="endArrow=block;" edge="1" parent="1" source="ing1" target="mask1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- PGF inside Training Loop -->
        <mxCell id="loopBox" value="" style="dashed=1;rounded=1;" vertex="1" parent="1">
          <mxGeometry x="485" y="290" width="700" height="320" as="geometry"/>
        </mxCell>

        <mxCell id="pgf1" value="Privacy-Gradient Filter (PGF)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="520" y="310" width="160" height="70" as="geometry"/>
        </mxCell>

        <mxCell id="gad1" value="GAD / GAN Model Engine&#10;(Generative → Adversarial → Diffusion)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="loopBox">
          <mxGeometry x="290" y="20" width="230" height="100" as="geometry"/>
        </mxCell>

        <mxCell id="pgfArrowA" style="endArrow=open;" edge="1" parent="loopBox" source="gad1" target="pgf1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="310" y="60" as="targetPoint"/>
          </mxGeometry>
        </schArrow>

        <!-- Synthetic Generator -->
        <mxCell id="synGen1" value="Synthetic Data Generator" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="loopBox">
          <mxGeometry x="290" y="160" width="230" height="80" as="geometry"/>
        </mxCell>

        <mxCell id="arrow5" style="endArrow=block;" edge="1" parent="loopBox" source="pgf1" target="synGen1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Output Synthetic -->
        <mxCell id="synDS1" value="Synthetic Data Sets for AI Training" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="840" y="310" width="230" height="80" as="geometry"/>
        </mxCell>

        <mxCell id="arrow6" style="endArrow=block;" edge="1" parent="1" source="synGen1" target="synDS1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- AI Models -->
        <mxCell id="ai1" value="Trained AI Models" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="840" y="500" width="230" height="80" as="geometry"/>
        </mxCell>

        <mxCell id="arrow7" style="endArrow=block;" edge="1" parent="1" source="synDS1" target="ai1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Feedback Loop -->
        <mxCell id="arrow8" style="endArrow=block;dashed=1;" edge="1" parent="1" source="ai1" target="sch1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Traditional DP Approach -->
        <mxCell id="dpBox" value="Traditional Privacy Path&#10;(Differential Privacy, Noise, Aggregation)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=none;strokeColor=black;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="550" y="700" width="300" height="100" as="geometry"/>
        </mxCell>

        <mxCell id="arrow9" style="endArrow=block;dashed=1;" edge="1" parent="1" source="mask1" target="dpBox">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

        <!-- Merge DP + Synthetic -->
        <mxCell id="merge1" value="Combine DP + Synthetic Data Layer for Compliance" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="900" y="700" width="330" height="100" as="geometry"/>
        </merge1>

        <mxCell id="arrow10" style="endArrow=block;" edge="1" parent="1" source="dpBox" target="merge1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="arrow11" style="endArrow=block;" edge="1" parent="1" source="synDS1" target="merge1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>

      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

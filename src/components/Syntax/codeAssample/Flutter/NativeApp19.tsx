/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2023/1/13 16:28
 */
import Syntax from "../../Syntax";
import React from "react"


const exampleCode = `
import 'package:flutter/material.dart';

class DailyCaloriesTitleView extends StatelessWidget {
  const DailyCaloriesTitleView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double btnWidth = 200;
    return SizedBox(
      width: btnWidth,
      child: ClipPath(
        clipper: TrapezoidPath(),
        child: Container(
          width: btnWidth,
          height: 77,
          alignment: Alignment.center,
          decoration: const BoxDecoration(color: Colors.red),
          child: const Text(
            'Clipper',
            style: TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
        ),
      ),
    );
  }
}

class TrapezoidPath extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    double x = size.width;
    double y = size.height;
    var path = Path();
    double skewing = 25;
    path.moveTo(skewing, y); // step 1: 选择一个点
    path.lineTo(0, 0); // step 2: 添加坐标(0, 0)
    path.lineTo(x, 0); // step 3: 添加坐标(x, 0)
    path.lineTo(x - skewing, y); // step 4: 添置第4个坐标点，形成四边形
    path.close();

    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) {
    return true;
  }
}
`.trim();

export default () => <Syntax code={exampleCode} />


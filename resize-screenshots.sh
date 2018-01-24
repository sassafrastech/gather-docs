cd assets/screenshots/hires
for f in *; do
  if [ ! -f ../$f ]; then
    convert -units PixelsPerInch $f -density 72 -resample 50% ../$f
  fi
done
cd -

function construction(worker){
if(worker.dizziness == true){
worker.levelOfHydrated += (worker.weight * worker.experience * 0.1);
worker.dizziness = false;
}
return worker
}
construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )